import React, { useState, useRef } from 'react';
import { Table, Input, Space, Avatar, Tag, Upload, Modal, Select, Popconfirm, message, Menu, Dropdown } from 'antd';
import { Button } from '@mui/material';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import Dashboard from './dashboard';

const Attendance = () => {
  const getStudentAttendanceData = () => {
    const currentDate = new Date().toLocaleDateString();
    return [
      {
        key: '1',
        id: 'S001',
        name: 'John Brown',
        course: 'Math',
        attendance: 'Present',
        date: currentDate,
        avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph',
      },
      {
        key: '2',
        id: 'S002',
        name: 'Joe Black',
        course: 'Physics',
        attendance: 'Absent',
        date: currentDate,
        avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=sph',
      },
    ];
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const { Option } = Select;
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handlePhotoChange = (info) => {
    if (info.file.status === "done" && info.fileList.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        photo: info.file.originFileObj,
      }));
    }
  };

  const handleEdit = (record) => {
    // Add logic for handling edit action here
    message.success(`Editing ${record.name}`);
  };

  const handleDelete = (record) => {
    // Add logic for handling delete action here
    message.success(`Deleting ${record.name}`);
  };

  const showEditDeleteMenu = (record) => (
    <Menu>
      <Menu.Item key="edit" onClick={() => handleEdit(record)}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete">
        <Popconfirm
          title="Are you sure you want to delete this student?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >
          Delete
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: <strong>Date</strong>,
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: <strong>User Image</strong>,
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => <Avatar alt="Avatar" src={avatar} style={{ width: '55px', height: '55px' }} />,
    },
    {
      title: <strong>ID</strong>,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: <strong>Name</strong>,
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      render: (text, record) => (
        <div>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: <strong>Course</strong>,
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: <strong>Attendance</strong>,
      dataIndex: 'attendance',
      key: 'attendance',
      render: (attendance) => (
        <Tag color={attendance === 'Present' ? 'green' : 'red'}>{attendance}</Tag>
      ),
    },
    {
      title: <strong>Action</strong>,
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Dropdown overlay={showEditDeleteMenu(record)}>
          <SettingOutlined style={{ cursor: 'pointer' }} />
        </Dropdown>
      ),
    },
  ];

  return (
    <>
      <Dashboard />
      <div style={{ maxWidth: '1000px', marginLeft: '300px', marginTop: '80px' }}>
        <div className="flex justify-between items-center">
          <h2 style={{ fontSize: "32px", fontWeight: "600" }}>Manage Users Attendance</h2>
        </div>
        <Table style={{ boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} className='mt-10' columns={columns} dataSource={getStudentAttendanceData()} />
      </div>
    </>
  );
};

export default Attendance;
