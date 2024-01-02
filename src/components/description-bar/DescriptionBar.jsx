import React, { useState, useEffect } from "react";
import { formatDate, getFormattedDateForAPI } from "../../utils/utils";
import "./index.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DescriptionBar = ({ loading, getAPODdata, data }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [nextDisabled, setNextDisabled] = useState(
    getFormattedDateForAPI(selectedDate) === getFormattedDateForAPI(new Date())
  );

  useEffect(() => {
    setNextDisabled(
      getFormattedDateForAPI(selectedDate) ===
        getFormattedDateForAPI(new Date())
    );
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getAPODdata(date);
  };

  if (loading) {
    return (
      <SkeletonTheme baseColor="#090b0f" highlightColor="#14161b">
        <div className="description-bar-container">
          <div className="description-bar-header">
            <img
              src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
              height={64}
              width={64}
              style={{ marginRight: "1rem" }}
              alt="NASA Logo"
            />
            <p className="description-bar-sub-title" style={{ margin: 0 }}>
              Astronomy Picture of the Day (APOD)
            </p>
          </div>
          <div className="description-bar-main">
            <h2 className="description-bar-title">
              <Skeleton count={2} />
            </h2>
            <p className="description-bar-sub-title">
              <Skeleton />
            </p>
            <Skeleton />
            <hr
              color="#AAA"
              style={{
                width: "100%",
                borderWidth: ".5px",
                marginTop: "1.25rem",
              }}
            />
            <div className="description-bar-explanation-container">
              <p className="description-bar-explanation">
                <Skeleton count={10} />
              </p>
            </div>
          </div>
          <div style={{ zIndex: "1" }} className="description-bar-footer">
            <div
              className="description-bar-footer-left"
              onClick={() => {
                let previousDate = new Date(selectedDate);
                previousDate.setDate(selectedDate.getDate() - 1);
                handleDateChange(previousDate);
              }}
            />
            <div
              className="description-bar-footer-right"
              onClick={() => {
                if (!nextDisabled) {
                  let nextDate = new Date(selectedDate);
                  nextDate.setDate(selectedDate.getDate() + 1);
                  handleDateChange(nextDate);
                }
              }}
            />
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <div className="description-bar-container">
      <div className="description-bar-header">
        <img
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
          height={64}
          width={64}
          style={{ marginRight: "1rem" }}
          alt="NASA Logo"
        />
        <p className="description-bar-sub-title" style={{ margin: 0 }}>
          Astronomy Picture of the Day (APOD)
        </p>
      </div>
      <div className="description-bar-main">
        <h2 className="description-bar-title">{data?.title}</h2>
        <p className="description-bar-sub-title">{formatDate(data?.date)}</p>
        {data?.copyright && data?.copyright !== "" && (
          <p className="description-bar-sub-title">
            Copyright: {data?.copyright}
          </p>
        )}
        {data?.media_type === "image" && (
          <a
            target="_blank"
            style={{ color: "#368ef5", textDecoration: "none" }}
            className="description-bar-sub-title"
            href={data?.hdurl}
            rel="noopener noreferrer"
          >
            Download Image
          </a>
        )}
        <hr
          color="#AAA"
          style={{ width: "100%", borderWidth: ".5px", marginTop: "1.25rem" }}
        />
        <div className="description-bar-explanation-container">
          <p className="description-bar-explanation">{data?.explanation}</p>
        </div>
      </div>
      <div className="description-bar-footer">
        <div
          className="description-bar-footer-left"
          onClick={() => {
            let previousDate = new Date(selectedDate);
            previousDate.setDate(selectedDate.getDate() - 1);
            handleDateChange(previousDate);
          }}
        >
          <p className="description-bar-footer-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="12.5"
              viewBox="0 0 320 512"
              style={{ marginRight: ".5rem" }}
            >
              <path
                fill="#368ef5"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
            Previous Day
          </p>
        </div>
        <div
          className="description-bar-footer-right"
          onClick={() => {
            if (!nextDisabled) {
              let nextDate = new Date(selectedDate);
              nextDate.setDate(selectedDate.getDate() + 1);
              handleDateChange(nextDate);
            }
          }}
        >
          <p
            style={nextDisabled ? { color: "#AAA" } : {}}
            className="description-bar-footer-btn"
          >
            Next Day
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="12.5"
              viewBox="0 0 320 512"
              style={{ marginLeft: ".5rem" }}
            >
              <path
                fill={nextDisabled ? "#AAA" : "#368ef5"}
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBar;
