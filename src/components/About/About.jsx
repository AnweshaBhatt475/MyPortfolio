import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/image.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anwesha Bhatt
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Software Development Engineer – Full Stack',
                'Java (JAX-RS) & React.js Developer',
                'Production Engineer | 12,000+ Users Served',
                'Cloud-Integrated Full-Stack Developer',
                'MERN Stack & PostgreSQL Specialist',
                'Builder of Scalable Real-Time Applications',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
         <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-8 leading-relaxed">
            Full-Stack SDE at Innostax Software Labs with 1+ year of production experience building insurance platforms using Java (JAX-RS), React.js, Node.js, and PostgreSQL. I deliver measurable impact — 30% faster backend performance, 25% reduced page load times — and have built SMS/MMS & email notification pipelines via Telnyx, AWS SES, SNS, Lambda, and S3 for 12,000+ users.
          </p>

          {/* Impact stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { value: '1+ Yrs', label: 'Experience' },
              { value: '12K+', label: 'Users Served' },
              { value: '30%', label: 'Perf. Boost' },
              { value: '25%', label: 'Faster Loads' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-purple-500/30 bg-purple-950/20 px-3 py-3 text-center"
              >
                <p className="text-lg sm:text-xl font-bold text-[#c084fc]">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1G2Cj4nXAgbxA_CCwRilH-t0D1baSS2Ax/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg,rgb(161, 69, 236), #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
            <a
              href="https://www.linkedin.com/in/anwesha-bhatt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-semibold border-2 border-[#8245ec] hover:bg-[#8245ec]/10 transition duration-300 transform hover:scale-105"
            >
              VIEW LINKEDIN
            </a>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anwesha Bhatt"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
