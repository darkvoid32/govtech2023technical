import React, { useState } from 'react'
import axios from "axios";

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
      shortenedUrlText = <p className="mb-2 fs-1">localhost:3000/{shortenedUrl}</p>
    } else {
      shortenedUrlText = <p className="mb-2 fs-1"></p>
    }

  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">URL Shortener</h1>
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="www.google.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
            <div class="d-grid gap-2 col-6 mx-auto">
            {shortenedUrlText}
            
            <button type="submit" className="btn btn-danger m-5">
              Shorten!
            </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddUrl;