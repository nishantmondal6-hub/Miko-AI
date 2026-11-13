import { useState } from "react";
import MikoFace from "./components/MikoFace";
import "./App.css";

function App() {
  const [isTalking, setIsTalking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  return (
    <main className="app">
      <header className="topbar">
        <h1>✦ Miko AI</h1>
        <span className="online">
          <span className="online-dot" />
          Online
        </span>


      </header>

      <section className="welcome">
        <p className="eyebrow">YOUR PERSONAL AI COMPANION</p>
        <h2>Hey there! I'm Miko.</h2>
        <p>I'm here to make your day easier.</p>
        
      </section>
      <section className="robot-section">
        <MikoFace
        isTalking={isTalking}
        isListening={isListening}
        />

        <h2 className="robot-name">Miko</h2>
        <p className="robot-status">
          {isTalking
          ? "Miko is talking..."
          : isListening
          ? "Miko is listening..."
          : "Ready to chat with you"}
          
        </p>

        <div className="controls">
          <button
          onClick={() => {
            setIsTalking(!isTalking);
            setIsListening(false);

          }}
          >
            {isTalking ? "Stop Talking" : "Talk"}
          </button>

          <button
          onClick={() => {
            setIsListening(!isListening);
            setIsTalking(false);

          }}
          >
            {isListening ? "Stop Listening" : "Listen"}
          </button>
        </div>
      </section>
      <footer>
         Made with curiosity ✦
      </footer>
    </main>
  );
}

export default App;

