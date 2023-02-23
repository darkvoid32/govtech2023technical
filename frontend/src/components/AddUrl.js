import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";


const AddUrl = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    
    const onSubmit = (e)=> {
        e.preventDefault();

        if (!url) {
          alert("please enter something");
          return;
        }

        axios
          .post("http://localhost:8080/api/shortenedUrl/create", {fullUrl: url})
          .then(res => {
            console.log(res.data);
            setShortenedUrl(res.data.shortenedUrl)
          })
          .catch(err => {
            console.log(err.message);
          });

        setUrl("")
    }
    console.log(url)

    let shortenedUrlText;
    if (shortenedUrl) {
      shortenedUrlText = <Link to={shortenedUrl}>localhost:3000/{shortenedUrl}</Link >
    } else {
      shortenedUrlText = <p></p>
    }

  return (
    <div>
      <main>
          <h1>URL Shortener</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="www.google.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
            <div>
            {shortenedUrlText}
            <p/>
            <button type="submit">
              Shorten!
            </button>
            </div>
          </form>
      </main>
    </div>
  );
}

export default AddUrl;