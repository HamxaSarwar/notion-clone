import React, { useState } from 'react';
import { downloadInstagramMedia } from '../services/instagramService';
import { isValidInstagramUrl } from '../utils/urlUtils';

function InstagramDownloader() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleDownload = async () => {
    if (!isValidInstagramUrl(url)) {
      setStatus('Invalid Instagram URL');
      return;
    }

    setStatus('Downloading...');
    try {
      await downloadInstagramMedia(url);
      setStatus('Download complete!');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Instagram Downloader</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Instagram URL"
      />
      <button onClick={handleDownload}>Download</button>
      <p>{status}</p>
    </div>
  );
}

export default InstagramDownloader;