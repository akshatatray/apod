import React from "react";
import "./index.css";

const ImageBox = ({ loading, url, mediaType, redirectUrl }) => {
  if (loading) return null;

  return (
    <div className="image-box">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(255,255,255,0) 60%, rgba(15,17,22,1) 95%)",
        }}
      ></div>
      {mediaType === "video" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a target="_blank" href={redirectUrl} rel="noreferrer">
            <div
              style={{
                height: "5rem",
                width: "5rem",
                borderRadius: "2.5rem",
                backgroundColor: "#E13050",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="18"
                viewBox="0 0 384 512"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fill="#ffffff"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                />
              </svg>
            </div>
          </a>
        </div>
      )}
      <img className="astro-image" src={url} alt="astro" />
    </div>
  );
};

export default ImageBox;
