import React from 'react';
import { isWindows, isMacOs } from 'react-device-detect';

const DownloadComponent = () => {
  return (
    <div>
      {isWindows && (
        <p>
          <a href="https://drive.usercontent.google.com/download?id=1xe1dyDM7b1BhrZl5JP0jNab-MAQ7ezI0&export=download&authuser=0" target='_blank'>
          <i class="fa-brands fa-windows" style={{paddingRight:"20px"}}></i>
          Download for Windows
          </a>
        </p>
      )}
      {isMacOs && (
        <p>
          <a href="https://drive.usercontent.google.com/download?id=1xe1dyDM7b1BhrZl5JP0jNab-MAQ7ezI0&export=download&authuser=0" target='_blank'>
          <i class="fa-brands fa-apple" style={{paddingRight:"20px"}}></i>
            Download for macOS</a>
        </p>
      )}
      {!isWindows && !isMacOs && (
        <p>Sorry, your operating system is not supported for download.</p>
      )}
    </div>
  );
};

export default DownloadComponent;
