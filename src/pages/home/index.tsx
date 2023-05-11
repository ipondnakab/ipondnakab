import { Avatar } from "antd";
import React from "react";
import {
  HomeContainer,
  HomeSector,
  IconContainer,
  InformationDetailContainer,
  Timeline,
  Tag,
} from "./index.style";
import { H1, H2, H3, P, Span, Ul } from "../../components";
import {
  DiAngularSimple,
  DiBootstrap,
  DiJava,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HomeSector
        style={{ alignItems: "center", justifyContent: "center", gap: 32 }}
      >
        <Avatar src="./images/profile.jpg" size={200} />
        <InformationDetailContainer style={{ maxWidth: 400 }}>
          <div>
            <Span>Hello I'm</Span>
            <H1>Kittipat Daengdee</H1>
          </div>
          <P>
            I’m a software engineer with 1.5+ years of experience in full-stack
            web and application development and automated test. I use a creative
            approach to problem-solving. I’m good at collaboration and eager to
            learn new skills.
          </P>
        </InformationDetailContainer>
      </HomeSector>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <HomeSector
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
            minWidth: 300,
          }}
        >
          <H2>Framwork & library</H2>
          <IconContainer>
            <DiReact />
            <DiNodejsSmall />
            <SiNextdotjs />
            <SiTailwindcss />
            <DiBootstrap />
            <SiVuedotjs />
            <DiAngularSimple />
          </IconContainer>
          <P>ReactJS, NodeJS, NextJS, Tailwind, Bootstrap, VueJS, Angular</P>
        </HomeSector>
        <HomeSector
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
            minWidth: 300,
          }}
        >
          <H2>Coding Languages</H2>
          <IconContainer>
            <SiTypescript />
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <DiJava />
            <SiPython />
            <SiCplusplus />
          </IconContainer>
          <P>Typescript, JavaScript, HTML, CSS, JAVA, Python, C++</P>
        </HomeSector>
      </div>
      <HomeSector style={{ flexDirection: "column", textAlign: "center" }}>
        <H2>Educations</H2>
        <div style={{ marginLeft: 16 }}>
          <P>
            Bachelor of Computer Engineering Khon Kaen University ( 2018 - 2022)
          </P>
        </div>
      </HomeSector>
      <HomeSector style={{ flexDirection: "column" }}>
        <H2>Work Experience</H2>
        <Timeline style={{ marginLeft: 16, marginTop: 16 }}>
          <Timeline.Item
            style={{ padding: 0 }}
            dot={<Avatar src="./images/odds-logo.jpeg" />}
          >
            <H3>
              <Tag>Software Engineer</Tag> ODDS ( May 2021 - Present )
            </H3>
            <P>Responsible for projects</P>
            <Timeline style={{ marginLeft: 16, marginTop: 16 }}>
              <Timeline.Item dot={<Avatar src="./images/set-logo.png" />}>
                <P>
                  Develop a website for SET (The Stock Exchange of Thailand) as
                  an outsourcing worker in the DIPO Team using React.Js and
                  Spring Boot for Frontend and Node.Js for Backend
                </P>
              </Timeline.Item>
              <Timeline.Item
                style={{ padding: 0 }}
                dot={
                  <Avatar
                    style={{
                      backgroundColor: "white",
                      color: "#222222",
                      fontSize: 22,
                    }}
                  >
                    J
                  </Avatar>
                }
              >
                <P>
                  Develop a taxes management website for Japan’s local
                  government using React.Js for Frontend, Node.Js for Backend,
                  and Playwright for Automated tests.
                </P>
              </Timeline.Item>
            </Timeline>
          </Timeline.Item>
          <Timeline.Item
            style={{ padding: 0 }}
            dot={<Avatar src="./images/odds-logo.jpeg" />}
          >
            <H3>
              <Tag>Internship</Tag> ODDS ( Summer 2021 )
            </H3>
            <P>
              Internship in software development using React.js, Flutter,
              Node.js, Golang, and Agile. I have been assigned to the following
              projects
            </P>
            <Timeline style={{ marginLeft: 16, marginTop: 16 }}>
              <Timeline.Item dot={<Avatar src="./images/pea-logo.jpeg" />}>
                <P>
                  PEA Outage Map: a web application for checking areas with
                  power outages.
                </P>
              </Timeline.Item>
              <Timeline.Item
                style={{ padding: 0 }}
                dot={<Avatar src="./images/safe-bsc-logo.png" />}
              >
                <P>
                  SafeBSC: a web application for finance portfolio digital
                  currency.
                </P>
              </Timeline.Item>
            </Timeline>
          </Timeline.Item>
          <Timeline.Item dot={<Avatar src="./images/zercle-logo.jpg" />}>
            <H3>
              <Tag>Internship</Tag> Zercle Technology Co., Ltd. ( Summer 2020 )
            </H3>
            <P>
              3 months internship on Website development with Angular, SQL,
              Node.Js, Deno.JS, HTML, CSS, SCSS
            </P>
          </Timeline.Item>
        </Timeline>
      </HomeSector>
      <HomeSector style={{ flexDirection: "column" }}>
        <H2>Outsourcing Developer and Other experience</H2>
        <Ul>
          <li>
            <b>Pa Yai Ha Mor (Took Grandma to see the Doctor):</b> A mobile
            application to assist the elderly in visiting hospitals. Develop
            using ReactNative, NodeJS, and Firebase which got an honorable
            mention at NSC 2021 (National Software Contest)
          </li>
          <li>
            <b>SMT:</b> Web application market management
          </li>
          <li>
            <b>Pettinee:</b> Platform for consulting veterinarians
          </li>
          <li>
            <b> VMKKU:</b> Veterinarians consultation platform for The Faculty
            of Veterinary Medicine, Khon Kaen University.
          </li>
          <li>
            <b>REAL CONTROL TECHNOLOGY CO., LTD.:</b> Corporate Website and OKR
            (Objective and Key Results) Platform
          </li>
        </Ul>
      </HomeSector>
    </HomeContainer>
  );
};

export default HomePage;
