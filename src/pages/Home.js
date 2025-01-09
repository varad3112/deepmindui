import React, { useEffect } from 'react';
import Card from '../components/Card';
import WOW from 'wow.js';
import 'animate.css';
import './Home.css';

const Home = () => {
  // Initialize WOW.js
  useEffect(() => {
    new WOW().init();
  }, []);

  const latestNewsData = [
    { imgSrc: "https://lh3.googleusercontent.com/PNlhxhf4LKLRCezIt7Ap358F91-vbK5dLp56Ak1FejpCZh3YTp6jGqIDJm9c0iAtx8Y73MCTu279c1k2GZkM2qXXaqx315NSOaSiU0y0ATMK2c2Hyw=w450-h255-n-nu-rw", text: "AI Research breakthroughs with the latest updates" },
    { imgSrc: "https://lh3.googleusercontent.com/oQJc7KdT6VMNI34EQDKbFRL59cIYqJQpX2HFx89rzbt4mREOnrimL7-iFzJrPn-laATOzohFG-aBEpDvIqMxkv-HBycJ3ZhmitYLKwha3JkidE4uwg=w450-h255-n-nu-rw", text: "Exploring AI's role in healthcare innovation" },
    { imgSrc: "https://lh3.googleusercontent.com/SresVCXLvYPfFosb0TQ7ux4XG0rtds1hAYOzMcayK9eeGv684ZcgcSUN95biWiMTpIHDPzuFiau-Lwsnz8qwkCQtJ-wILDf1XspScVimH6ObeBQKkg=w450-h255-n-nu-rw", text: "New AI advancements in machine learning techniques" }
  ];

  const technologiesData = [
    { imgSrc: "https://lh3.googleusercontent.com/ulOZK86B4c7sXPcUnDlSQURFolyMa-8XBJQec2Woosd9zBN7De6tbvzRus1CKPVnggG9DdupDYAH_z9DLdy04CP9D_kTQ1RexdN1BGn-kx-6BkXcWA=w450-h255-n-nu-rw", text: "AI Research breakthroughs with the latest updates" },
    { imgSrc: "https://lh3.googleusercontent.com/38hN7abkz0nIdpNKsLhnPO4w44AWfWJvMcldt6Pu1lo_cBSSYeY749XMscKC0YFAYpbfXr8RWLDWu7Tcr4hXnIp9K-jWspgE7daqOQM3ZKDN3nMIuFU=w450-h255-n-nu-rw", text: "Exploring AI's role in healthcare innovation" },
    { imgSrc: "https://lh3.googleusercontent.com/9EDiaqAY09W507UUFzuQ6cK4f0sFdQIZGr-i19OJHtZK1ODhpjE6lIWpZ6T4IlbcCxnFM8ilead5CZt0u-KhPZeF1dKWKQDICjMpGztCBpQVubDy4TU=w450-h255-n-nu-rw", text: "New AI advancements in machine learning techniques" },
    { imgSrc: "https://lh3.googleusercontent.com/VdNH5uoemuWg0x7dA-2JqjZcTZnEQrh5SXca2gFdJPpV3iup3F5LiXm992Eltk0m7l_jntwgRYOyim3JQOG9l2Z0J67wFZBvI7xyTUZLpY5jGgBN=w450-h255-n-nu-rw", text: "AI Research breakthroughs with the latest updates" },
    { imgSrc: "https://lh3.googleusercontent.com/iEpy3slnpRTE00a-mmISpLyQdzQGbY4ChI2fHkVYy5ZIXl2zWqYBSU8sn7gPemSkWt9xtDMUAK3CeDRW09Ae55XNfY8skYmcoIFmjawrWLjcFqUXRwE=w450-h255-n-nu-rw", text: "Exploring AI's role in healthcare innovation" },
    { imgSrc: "https://lh3.googleusercontent.com/Hlq6INY55SNpksLpiR1Nx5ZuugW_RW7LLWnvlwy8yelv6xAo8O0hwRNxEACXmQiFfSuJ_v6nhX4zDcOooiZItYfGMzG0ksz_71xMfmhl15E_hFFJEw=w450-h255-n-nu-rw", text: "New AI advancements in machine learning techniques" }
  ];

  const responsibilitiesData = [
    { imgSrc: "https://lh3.googleusercontent.com/OkPvii8KHh8AnK4lJITCKYDf8Unr5_jaPAjjF468zwHWQCTAgtwteb7IcQuW3hstG1YNKxhFa1TBfiFWCrkeUWVU6ysB7MfMzE7OPDLvciL4TVrzgQ=w450-h255-n-nu-rw", text: "AI Research breakthroughs with the latest updates" },
    { imgSrc: "https://lh3.googleusercontent.com/1G0Qe-CimP0LgqFJplCxdpDCc9e1fXhFzYdYwkZ4NnUiR-Jc3odWTxm1z0RJBvNKiMOkLMnSDHIXS4nZ0jBRBEIuOLbqdNDS7yPrquyyanIMrQKmCA=w450-h255-n-nu-rw", text: "AI Research breakthroughs with the latest updates" }
  ];

  const exploreData = [
    { title: "Google AI" },
    { title: "Google AI Studio" },
    { title: "Google Cloud" },
    { title: "Google AI for Developers" },
    { title: "Gemini" },
    { title: "Google Labs" },
  ];

  return (
    <div className="home">
      <header className="hero-section">
        <h1 className="hero-title">
          The Next Era Of Gemini<br />
        </h1>
        <p id="p1">Gemini 2.0 is our most capable AI model yet, built for the agentic era</p><br />
        <div className="hero-buttons">
          <button className="learn-more-btn">Learn More</button>
          <button className="chat-with-gemini-btn">Chat with Gemini</button>
        </div>
      </header>

      {/* Project Astra Section */}
      <section className="project-astra wow animate__animated animate__fadeInUp">
        <h2 className="section-title">
          Project Astra
        </h2>
        <p className="section-description">
          A research exploring future capabilities of universal AI assistant
        </p>
        <button className="learn-more-btn">
          Learn More
        </button>
      </section>

      {/* Project Mariner Section */}
      <section className="project-mariner wow animate__animated animate__fadeInUp">
        <h2 className="section-title2">
          Project Mariner
        </h2>
        <p className="section-description2">
          A research prototype exploring the future of human-agent interaction, starting with your browser
        </p>
        <button className="learn-more-btn">
          Learn More
        </button>
      </section>

      {/* Latest News Section */}
      <section className="latest-news wow animate__animated animate__fadeInUp">
        <h2 className="section-title">Latest News</h2>
        <p className="section-description">
          Discover our latest AI breakthroughs and updates from the lab
        </p>
        <button className="view-all-posts-btn">View All Posts</button>
        <div className="cards">
          {latestNewsData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              text={card.text}
              className="wow animate__animated animate__fadeInUp"
            />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies wow animate__animated animate__fadeInUp">
        <h2 className="section-title">Technologies</h2>
        <p className="section-description">
          Explore our cutting-edge technologies and innovations
        </p>
        <button className="view-all-posts-btn">View All Technologies</button>
        <div className="cards">
          {technologiesData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              text={card.text}
              className="wow animate__animated animate__fadeInUp"
            />
          ))}
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="responsibility wow animate__animated animate__fadeInUp">
        <h2 className="section-title">Responsibility</h2>
        <p className="section-description">
          We want AI to benefit the world, so we must be thoughtful about how it’s built and used.
        </p>
        <button className="view-all-posts-btn">View All Technologies</button>
        <div className="cards">
          {responsibilitiesData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              text={card.text}
              className="wow animate__animated animate__fadeInUp"
            />
          ))}
        </div>
      </section>

      {/* New Section */}
      <section className="new-section wow animate__animated animate__fadeInUp">
        <h2 className="section-title">Explore our other teams and product areas</h2>
        <div className="explore-grid">
          {exploreData.map((item, index) => (
            <div key={index} className="explore-card wow animate__animated animate__fadeInUp">
              <span className="explore-card-title">{item.title}</span>
              <span className="explore-arrow">→</span>
            </div>
          ))}
        </div>
      </section>
  </div>
  );
};

export default Home;
