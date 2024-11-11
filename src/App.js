import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Address 2:
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
        </label>
        <br /><br />

        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          Province:
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
          </select>
        </label>
        <br /><br />

        <label>
          Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </label>
        <br /><br />

        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
          I agree to the terms and conditions
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.name}</p>
          <p>Address: {submittedData.address}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
