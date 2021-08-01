import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  MainContainer,
  HeaderContainer,
  HeaderBar,
  ResponsiveContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  PageTopic,
  SearchBarContainer,
  PageSubTopic,
  PageContent,
  PageContentText,
  ListLi,
  TableTextField,
  MouSignatureSpace,
  MouButtons,
  Colors,
} from "../../common/CommonStyle";

const Landing = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <MainContainer>
      <HeaderContainer>
        <RouteTopicContainer>
          <PageTopic>Introduction</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>

      <PageContent>
        <PageSubTopic
          theme={{
            fontFamily: "futura_book",
            fontSize: "25px",
            marginTop: "20px",
          }}
        >
          Hi, My name is <b>Harkamal Singh</b>.
        </PageSubTopic>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          I am 22 years old. I live in Rajpura (Punjab). I did my schooling from
          Rajpura and my graduation from Punjabi University, Patiala. My overall
          GPA is <b>7.5</b>. My father is in government service and my mother is
          a home-maker. I am a self-learner and self-motivated person who always
          thinks out of the box. My hobbies are playing cricket, listening to
          music and going to the gym.{" "}
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          In my college time, I started learning python and started working on
          Artificial Intelligence, I took many courses which include Coursera’s
          Machine Learning and Udemy’s Computer Vision Course. But one time came
          at which I realized that machine learning is not for me. One of my
          friends was working in ReactJs and he told me about the scope of it. I
          decided to learn it and explore it. So I decided to do an internship
          in ReactJs technology at Coding Ninjas. Since then, I have been working
          on this technology and learning new things every day.
        </PageContentText>
      </PageContent>
    </MainContainer>
  );
};

export default Landing;
