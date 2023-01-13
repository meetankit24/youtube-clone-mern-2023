import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// const Wrapper = styled.div``;
const Home = ({ type }) => {
  //this {type} prop comes from routing which sets on app.js page
  const [videos, setVideos] = useState([]); //initially will be [] array

  useEffect(() => {
    const fetchVideos = async () => {
      //here for calling exact api path we will use prop like-
      //`/videos/trends` , `/videos/subs`, `/videos/random` it exactly will api at backend
      const res = await axios.get(`/videos/${type}`);

      //setVideos([]) will replace with [{video1},{video2},{video3}]
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]); //when type change it useeffect will execute

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
        //here we will send "key" for uniqueness and video associated with it to render cards
      ))}
    </Container>
  );
};

export default Home;
