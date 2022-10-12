import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchChannelDetailData = async () => {
      const { items } = await fetchFromAPI("channels", {
        part: "snippet",
        id: id,
      });

      console.log(`channel: `);
      console.log(items[0]);

      setChannelDetail(items[0]);
    };

    const fetchChannelVideosData = async () => {
      const { items } = await fetchFromAPI("search", {
        channelId: id,
        order: "date",
        part: "snippet",
        id: id,
      });

      console.log(`video: `);
      console.log(items[0]);

      setVideos(items);
    };

    fetchChannelDetailData();
    fetchChannelVideosData();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "300px",
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            // zIndex: ,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-90px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
