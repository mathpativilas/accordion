import React, { useState } from "react";
import data from "./components/data";
import Questions from "./components/Questions";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((item) => (
            <Questions key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
