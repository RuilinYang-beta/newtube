# About

This is a frontend project that retrieves YouTube data and display them, with ReactJS, MaterialUI, and [YouTube v3 API](https://rapidapi.com/ytdlfree/api/youtube-v31/).

It is deployed to Heroku by following [this guide](https://www.educative.io/answers/how-to-deploy-react-app-to-heroku).

Demo: [https://newtube-reactjs-materialui.herokuapp.com/](https://newtube-reactjs-materialui.herokuapp.com/)

# Functionality

- On landing the home page, the user can click on the categories or submit a search term, this will trigger routing to display `SearchFeed` component, and fire a HTTP request, and display the returned data.
- Similarly, when the user click on a video/channel title, the client side routing is triggered to display `VideoDetail` or `ChannelDetail` component, then related data is requested and displayed.

# Component Structure

- App
  - Navbar
    - Link (logo)
    - SearchBar
      - Paper
        - Input
        - IconButton
          - Search
  - Feed
    - Sidebar
    - Videos
      - VideoCard
      - ChannelCard
  - VideoDetail
  - ChannelDetail
    - ChannelCard
    - Videos
      - VideoCard
  - SearchFeed
    - Videos
      - VideoCard
      - ChannelCard
