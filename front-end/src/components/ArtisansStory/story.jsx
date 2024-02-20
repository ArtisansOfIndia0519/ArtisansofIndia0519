import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "./story.css";
import video1 from "../Assets/Videos/story1.mp4";

const SliderComponent = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const sliderRef = useRef(null);

  const cards = useMemo(
    () => [
      { id: 1, videoUrl: video1 },
      { id: 2, videoUrl: video1 },
      { id: 3, videoUrl: video1 },
      { id: 4, videoUrl: video1 },
      { id: 5, videoUrl: video1 },
      { id: 6, videoUrl: video1 },
      { id: 7, videoUrl: video1 },
      { id: 8, videoUrl: video1 },
      { id: 9, videoUrl: video1 },
      { id: 10, videoUrl: video1 },
      { id: 11, videoUrl: video1 },
      { id: 12, videoUrl: video1 },
      { id: 13, videoUrl: video1 },
      { id: 14, videoUrl: video1 },
      { id: 15, videoUrl: video1 },
    ],
    []
  );

  useEffect(() => {
    const slider = sliderRef.current;

    const handleVideoEnd = () => {
      if (currentCard === cards.length - 1) {
        slider.style.transition = "none";
        setCurrentCard(0);
        setTimeout(() => {
          slider.style.transition = "transform 0.5s ease-in-out";
        }, 0);
      } else {
        setCurrentCard((prevCard) => prevCard + 1);
      }
    };

    cards.forEach((card) => {
      const video = slider.querySelector(`#video-${card.id}`);
      video.addEventListener("ended", handleVideoEnd);
    });

    return () => {
      cards.forEach((card) => {
        const video = slider.querySelector(`#video-${card.id}`);
        video.removeEventListener("ended", handleVideoEnd);
      });
    };
  }, [cards, currentCard]);

  const nextCard = useCallback(() => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  }, [cards]);

  const prevCard = useCallback(() => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  }, [cards]);

  const transformValue = `translateX(-${(currentCard * 100) / cards.length}%)`;

  return (
    <div className="container">
      <div className="title">Stories Of Artisans</div>
      <div className="story-slider-container">
        <div className="story-container">
          <div
            className="story"
            ref={sliderRef}
            style={{
              width: `${cards.length * 300}px`,
              transform: transformValue,
              margin: "auto",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${
                  card.id === currentCard + 1 ? "active" : ""
                }`}
                style={{ width: "300px", height: "300px", margin: "auto" }}
              >
                <video
                  id={`video-${card.id}`}
                  src={card.videoUrl}
                  autoPlay={card.id === currentCard + 1}
                  controls={card.id === currentCard + 1}
                  loop={false}
                  className="video"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-button left" onClick={prevCard}>
            &lt;
          </button>
          <button className="nav-button right" onClick={nextCard}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
