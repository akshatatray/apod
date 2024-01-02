import React, { useState, useEffect, useCallback } from "react";
import ImageBox from "./components/image-box/ImageBox";
import DescriptionBar from "./components/description-bar/DescriptionBar";
import axios from "axios";
import { getFormattedDateForAPI } from "./utils/utils";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAPODdata = useCallback(async (date = new Date()) => {
    setLoading(true);
    setData(null);
    const formattedDate = getFormattedDateForAPI(date);
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod`, {
        params: {
          api_key: "gkcAu1tbbxNuPm1lCGbWnolAKfGPdpfAsCcyNHy6",
          thumbs: true,
          date: formattedDate,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      const previousDay = new Date(date);
      previousDay.setDate(date.getDate() - 1);
      await getAPODdata(previousDay);
      return;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAPODdata();
  }, [getAPODdata]);

  return (
    <div className="app-main">
      <ImageBox
        loading={loading}
        url={data?.media_type === "image" ? data?.hdurl : data?.thumbnail_url}
        mediaType={data?.media_type}
        redirectUrl={data?.media_type === "video" ? data?.url : ""}
      />
      <DescriptionBar loading={loading} getAPODdata={getAPODdata} data={data} />
    </div>
  );
};

export default App;
