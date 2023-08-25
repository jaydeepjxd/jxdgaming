import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://asset.cloudinary.com/dbpsqr2zt/74814badfc9b68d21510bce50d7157ee"
              alt="Founder"
            />
            <Typography>Jaydeep Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Jaydeep Singh. Only with the
              purpose to learn and show MERN stack development.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
