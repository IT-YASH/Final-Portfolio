import { useEffect } from "react";
import "../App.css";

const StarryBackground = () => {
  useEffect(() => {
    const starContainer = document.createElement("div");
    starContainer.classList.add("star-container");
    document.body.appendChild(starContainer);

    const createStar = (x, y) => {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${y}px`;
      star.style.left = `${x}px`;
      starContainer.appendChild(star);

      star.addEventListener("animationend", () => {
        starContainer.removeChild(star);
      });

      star.addEventListener("click", () => {
        star.classList.add("twinkle");
        setTimeout(() => {
          star.classList.remove("twinkle");
          star.style.top = `${Math.random() * 300}vh`;
          star.style.left = `${Math.random() * 300}vw`;
        }, 1000);
      });
    };

    for (let i = 0; i < 300; i++) {
      createStar(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }

    const handleClick = (e) => {
      createStar(e.clientX, e.clientY);
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeChild(starContainer);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default StarryBackground;
