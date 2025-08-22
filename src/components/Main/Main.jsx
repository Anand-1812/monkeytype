import { useState } from "react";
import { generate } from "random-words";
import "./Main.css";
import { FaArrowRotateRight } from "react-icons/fa6";

function GenerateSentence({ wordCount = 29 }) {
  const [sentence, setSentence] = useState(() =>
    generate({ exactly: wordCount, join: " " })
  );

  const regenerate = () => {
    setSentence(generate({ exactly: wordCount, join: " " }));
  };

  return (
    <div className="words-container">
      <p className="words">{sentence}</p>
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

