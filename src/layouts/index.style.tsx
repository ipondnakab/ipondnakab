import Particles from "react-particles-js";
import styled from "styled-components";

export const AppContentContainer = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
`;

export const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const CustomParticles = styled(Particles).attrs((props) => ({
  // params: {
  //   fps_limit: 60,
  //   particles: {
  //     number: {
  //       value: 50,
  //     },
  //     size: {
  //       value: 3,
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     color: {
  //       value: props.theme.palette.text.active,
  //     },
  //     line_linked: {
  //       color: props.theme.palette.text.active,
  //     },
  //   },
  //   interactivity: {
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: "grab",
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: "repulse",
  //       },
  //     },
  //   },
  // },
  params: {
    fps_limit: 60,
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 3200,
        },
      },
      color: {
        // value: ["#c311e7", "#b8e986", "#4dc9ff", "#ffd300", "#ff7e79"],
        value: props.theme.palette.text.active,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        // image: {
        //   src: "img/github.svg",
        //   width: 100,
        //   height: 100,
        // },
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 30,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: props.theme.palette.text.active,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 10,
          // size: 40,
          // duration: 1,
          // opacity: 8,
          // speed: 1,
        },
        repulse: {
          distance: 125,
          duration: 1,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    // *EE^WDte@VPnyi&o9vE5X@WbWNe*k5ka
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden !important;
`;
