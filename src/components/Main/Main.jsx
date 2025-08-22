import { useEffect, useRef, useState } from "react";
import { generate } from "random-words";
import "./Main.css";
import { FaArrowRotateRight } from "react-icons/fa6";

function GenerateSentence({ wordCount = 29 }) {
  const [sentence, setSentence] = useState(() =>
    generate({ exactly: wordCount, join: " " })
  );
  const [currIndex, setCurrIndex] = useState(0);

  const charRefs = useRef([]);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = () => {
      setCurrIndex((prev) => Math.min(prev + 1, sentence.length));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sentence]);

  useEffect(() => {
    if (charRefs.current[currIndex] && cursorRef.current && containerRef.current) {
      const rect = charRefs.current[currIndex].getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();

      cursorRef.current.style.left = rect.left - parentRect.left + "px";
      cursorRef.current.style.top = rect.top - parentRect.top + "px";
    }
  }, [currIndex]);

  const regenerate = () => {
    setSentence(generate({ exactly: wordCount, join: " " }));
    setCurrIndex(0);
  };

  return (
    <div className="words-container" ref={containerRef}>
      <p className="words">
        {sentence.split("").map((ch, i) => (
          <span
            key={i}
            ref={(el) => (charRefs.current[i] = el)}
            className="char"
          >
            {ch}
          </span>
        ))}
        <span ref={cursorRef} className="cursor" />
      </p>
      <button className="regenerate-btn" onClick={regenerate}>
        <FaArrowRotateRight className="navIcons" />
      </button>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <GenerateSentence />
    </div>
  );
}

export default Main;

