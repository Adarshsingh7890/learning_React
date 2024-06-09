import './AddUser.css';
import { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    passWord: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's callback function with the form data
    onAddUser(formData);
    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      passWord: ''
    });
  };

  return (
    <div className="add-user-container">
      <div className="add-user-form">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          {/* Label and input for first name */}
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Label and input for last name */}
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Label and input for email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Label and input for username */}
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Label and input for password */}
          <div>
            <label htmlFor="passWord">Password:</label>
            <input
              type="password"
              id="passWord"
              name="passWord"
              value={formData.passWord}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit button */}
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
