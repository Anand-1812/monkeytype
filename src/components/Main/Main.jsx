import { useEffect, useState } from "react";
import { generate } from "random-words";
import "./Main.css";
import { FaArrowRotateRight } from "react-icons/fa6";

function GenerateSentence({ wordCount = 29 }) {
  const [sentence, setSentence] = useState(() =>
    generate({ exactly: wordCount, join: " " })
  );

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setCurrIndex((prev) => Math.min(prev + 1, sentence.length - 1));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sentence]);

  useEffect(() => {
    console.log("currIndex updated:", currIndex);
  }, [currIndex]);

  const regenerate = () => {
    setSentence(generate({ exactly: wordCount, join: " " }));
    setCurrIndex(0);
  };

  return (
    <div className="words-container">
      <p className="words">
        {sentence.split("").map((ch, i) => (
          <span key={i} className="char">
            {i === currIndex && <span className="cursor" />}
            {ch}
          </span>
        ))}
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

