import React, { useState } from "react";
import ShortLink from "./Components/ShortLink";
import './App.css'; // Import the CSS file

const App = () => {
  const [generatedUrl, setGeneratedUrl] = useState("");

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="align-items">Tiny Url</h1>
      </div>
      <ShortLink setGeneratedUrl={setGeneratedUrl} />
      {generatedUrl && (
        <div className="result">
          <p>Generated Short Link: <a href={generatedUrl} target="_blank" rel="noopener noreferrer">{generatedUrl}</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
