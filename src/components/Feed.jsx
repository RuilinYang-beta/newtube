import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI, BASE_URL } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await fetchFromAPI("search", {
        q: selectedCategory,
        part: "snippet",
      });

      setVideos(items);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        height: "100%",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "100vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "95vh",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory}
          <span style={{ color: "#f31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
