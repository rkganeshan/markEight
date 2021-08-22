import "./styles.css";
import emojiDictionary from "./EmojiDictionary";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [input, setInput] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const inputHandler = (e) => {
    const emoji = e.target.value;
    setInput(emoji);
    const meaning = emojiDictionary[emoji];

    if (meaning) {
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("Error 404!!! emoji not found");
    }
  };

  const clickHandler = (emoji) => {
    const meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  };
  return (
    <div className="App">
      <h1 className="text-success">Emoji Hub</h1>
      <div className="container">
        <input
          placeholder="Enter the emoji name"
          value={input}
          onChange={inputHandler}
        />
        <p>"{emojiMeaning}"</p>
        <div className="emojis">
          {Object.keys(emojiDictionary).map((emoji) => (
            <span
              className="emoji"
              key={uuidv4()}
              onClick={() => clickHandler(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
