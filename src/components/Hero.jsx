import { motion } from 'framer-motion';
import { styles } from '../styles';
import { me, bwmap, running } from '../assets';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
        words: ["A Developer who aims for the stars.", "A Photographer who loves the outdoors.", "A Dreamer who can't sleep before 2 A.M.", "Welcome to my World"],
        loop: 1,
        delaySpeed: 2000,
        typeSpeed: 30,
        deleteSpeed: 30,
    })
  
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="New York City"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={running}
          alt="Boston"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="text-[#535558] sm:text-[90px]
                text-[50px] font-against
                font-extrabold uppercase">
                Anshul
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {/* Text to show */}
              <span className='mr-3'>{text}</span>
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            hover:border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        
          <div>
          <img
            className="absolute bottom-0
            sm:ml-[50vw]  md:ml-[50vw] lg:ml-[55vw] xl:ml-[60vw] 2xl:ml-[60vw]
            sm:h-[60vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[70vh]"
            src={me}
            alt="Anshul"
          />
          </div>
        
      </section>
    </>
  );
};

export default Hero;
