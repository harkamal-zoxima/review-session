import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  MainContainer,
  HeaderContainer,
  RouteTopicContainer,
  BreadcrumbLink,
  HeaderBar,
  PageTopic,
  ResponsiveContainer,
  Colors,
  PageContent,
  PageSubTopic,
  PageContentText,
  SearchBarContainer,
} from "../../common/CommonStyle";

const Notification = (props) => {
  const themeContext = useContext(ThemeContext);

  //Table
  return (
    <MainContainer>
      <HeaderContainer>
        <RouteTopicContainer>
          <PageTopic>Suggestions</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>

      <PageContent>
        <PageSubTopic
          theme={{
            fontFamily: "futura_book",
            fontSize: "25px",
          }}
        >
          Employees are Valuable Assets of an Organization and the Key to
          Success.
        </PageSubTopic>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
          }}
        >
          Each company has pros and cons. But in this company,
          every employee is very co-operative and cheerful. Especially Dinesh
          sir, Omkar sir, Harjeet sir, Sukhjit Ji, Simran Ji, and Sukhbir Ji are
          very helpful and I am very thankful to them.
        </PageContentText>
        <PageContentText
          theme={{
            fontFamily: "futura_book",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          My suggestion to the company is that the company should provide laptop
          and other accessories to its employees so that the privacy of the
          projects should remain secure and there should be proper traning
          session for the freshers so that they can achieve the same level
          as others.
        </PageContentText>
      </PageContent>
    </MainContainer>
  );
};

// const mapStateToProps = (state) => ({
//   notificationList:
//     state.notifications.landingNotifications &&
//     state.notifications.landingNotifications.length > 0
//       ? state.notifications.landingNotifications
//       : [],
// });

// const mapDispatchToProps = (dispatch) => ({
//   getNotification: (params) =>
//     dispatch(NotificationActions.landingNotification(params)),
// });

export default Notification;
