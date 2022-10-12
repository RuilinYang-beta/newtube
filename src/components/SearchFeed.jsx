import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { items } = await fetchFromAPI("search", {
        q: searchTerm,
        part: "snippet",
      });

      setVideos(items);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "95vh",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Results for:
        <span style={{ color: "#f31503" }}> {searchTerm} </span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
