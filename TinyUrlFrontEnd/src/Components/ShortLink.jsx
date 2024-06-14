import React, { useState } from "react";
import './ShortLink.css'; // Import the CSS file for styling
import axios from "axios";

const ShortLink = ({ setGeneratedUrl }) => {
  const [url, setUrl] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      url,
      expirationDate: expirationDate? new Date(expirationDate).toISOString : null,
    };

    axios.post("http://localhost:8080/generate", requestData)
      .then((response) => {
        setGeneratedUrl(response.data.shortLink);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Generate Url</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Url">Url</label>
          <input
            type="text"
            id="Url"
            className="input"
            placeholder="Enter the Url"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="datetime-local"
            id="expirationDate"
            className="input"
            value={expirationDate}
            onChange={handleExpirationDateChange}
          />
        </div>
        <button type="submit" className="button">Generate Short Link</button>
      </form>

      
    </div>
  );
};

export default ShortLink;
