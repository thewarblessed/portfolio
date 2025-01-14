import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 550,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true, // Enables line linking
            distance: 1, // Distance within which particles are linked
            color: "#ffffff", // Line color
            opacity: 0.1, // Line opacity
            width: 0.5, // Line width
          },
          move: {
            direction: "none",
            speed: 0.002,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.01,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab", // Change mode to "grab" for connecting lines
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 100, // Distance within which particles connect
              line_linked: {
                opacity: 0.5, // Opacity of connecting lines
              },
            },
            attract: {
              distance: 300,
              duration: 0.9,
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
