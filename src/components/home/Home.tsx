import React from "react";
import Style from "./Home.module.scss";
// import me from "../../img/self.png";
import me from "../../img/self2.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

import Canvas from "../Extra/Canvas";
import Experience from "../Addition/Experience";
import { Projects } from "../Addition/Projects";

export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      // flexDirection={{ xs: "column", md: "column" }}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      // minHeight={"calc(100vh - 175px)"}
    >
      <Canvas />
      <Box
        position={"absolute"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        // minHeight={"calc(100vh - 175px)"}
        height={'100%'}
        width={'100%'}
        bgcolor={"transparent"}
      >
        <Box
          className={classNames(Style.avatar, Style.shadowed)}
          alt={"image of developer"}
          style={{ background: info.gradient }}
          component={"img"}
          src={me}
          width={{ xs: "35vh", md: "40vh" }}
          height={{ xs: "35vh", md: "40vh" }}
          borderRadius={"50%"}
          p={"0.75rem"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "1rem" }}
        />
        <Box>
          <h1>
            Hi, I'm{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {info.firstName}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>
          <h2>I'm {info.position}.</h2>
          <Box component={"ul"} p={"0.8rem"}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={{xs:"center", md:"left"}}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            {info.socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </Box>
      </Box>
      {/*===================================== EXPERIENCE TIMELINE ===================================*/}
      {/* <Box
        zIndex={"1"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 50px)"}
        maxWidth={"90%"}
        bgcolor={"transparent"}>
        <Experience />
      </Box> */}
      {/*===================================== PROJECTS ===================================*/}
      {/* <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 50px)"}
        maxWidth={"90%"}
        bgcolor={"transparent"}>
        <Projects />
      </Box> */}
    </Box>
  );
}
