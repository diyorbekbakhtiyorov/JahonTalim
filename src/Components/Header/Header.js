import React, { useEffect } from "react";
import "../../Styles/Header.css";
import Image from "../../Images/JahonTalim.png";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fff",
              // value: "#c6003f",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#c6003f",
            },
            links: {
              color: "#c6003f",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container">
        <div className="flex_wrap">
          <div className="wrap" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <h1 className="capital_word" >Jahon Ta'lim</h1>
            <h3 className="description">Koinotlarni biz bilan zapt eting</h3>
          </div>
          <div className="wrap2">
            <img src={Image} width={400} height={400} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
