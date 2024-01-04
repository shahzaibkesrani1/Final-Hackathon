import React, { useState } from 'react'
import Dashboard from './dashboard'
import UserTable from '../../Users/User'
import { Button } from '@mui/material'
import { Input, Modal, Select, Upload } from 'antd';
import { IoIosAddCircleOutline } from 'react-icons/io';

function Manageuser() {
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

  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange: handlePhotoChange,
  };

  return (
   <>
    <Dashboard/>
    <div className="p-10 mt-10 sm:ml-64">
    <div className="flex justify-between items-center">
      <h2 style={{ fontSize: "32px", fontWeight: "600" }}>Manage Users</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Students</Button>
    </div>
    <div
      className="p-10 mt-5"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <UserTable />
    </div>
  </div>
  <Modal
      centered
      visible={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={500}
      className="custom-modal"
    >
      <div className="mt-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="Enter Student Name"
          name="name"
          type="text"
          required
        />
      </div>

      <div className="mt-2">
        <label
          htmlFor="id"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          ID
        </label>
        <Input
          id="id"
          placeholder="Enter ID"
          name="id"
          type="number"
          required
        />
      </div>
      <div className="mt-2">
        <label
          htmlFor="courseName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Course Name
        </label>
        <Select
          id="courseName"
          placeholder="Select Course"
          name="courseName"
          style={{ width: '100%' }}
          required
        >
          <Option value="course1">Course 1</Option>
          <Option value="course2">Course 2</Option>
          <Option value="course3">Course 3</Option>
        </Select>
      </div>
      <div className="mt-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <Input
          id="password"
          placeholder="Enter Password"
          name="password"
          type="password"
          required
        />
      </div>
     
      <div className="mt-2">
        <label
          htmlFor="photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Photo
        </label>
        <Upload {...props} maxCount={1}>
          <Button icon={<IoIosAddCircleOutline />}>Upload</Button>
        </Upload>
      </div>

    
    </Modal>

   </>
  )
}

export default Manageuser