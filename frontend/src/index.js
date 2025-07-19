import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", lineHeight: "1.6" }}>
      <h1>Hello from React</h1>
      <p>Email: <strong>rahulsngce007@gmail.com</strong></p>

      <h2>Available API Endpoints</h2>
      <ul>
        <li>
          <a href="/api/hello" target="_blank" rel="noreferrer">
            /api/hello
          </a> — Currently returns a message from the backend.
        </li>
        <li>
          <a href="/api/db" target="_blank" rel="noreferrer">
            /api/db
          </a> — Tests the database connection and returns status.
        </li>
      </ul>

      <p>
        The APIs are powered by a FastAPI backend container and connected to a MySQL database.
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
