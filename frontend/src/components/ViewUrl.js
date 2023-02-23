import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from "axios"


const ViewUrl= () => {
    const [url, setUrl] = useState("");
    const { shortenedUrl } = useParams();
    
    useEffect(() => {
      const fetchUrlAndSetUrl = async () => {
        const result = await axios.get("http://localhost:8080/api/shortenedUrl/" + shortenedUrl);
        console.log(result.data[0].fullUrl)
        setUrl(result.data[0].fullUrl);
      };
      fetchUrlAndSetUrl();
    });

    if (url) {
      if (url.slice(0, 8) == "https://") {
        window.location.replace(url)  
      } else {
        window.location.replace("https://" + url)
      }
    }

  return (
    <div>
      <p>URL not found!</p>
    </div>
  );
}

export default ViewUrl;