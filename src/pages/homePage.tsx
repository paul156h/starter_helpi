import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./HomePage.css";

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

export function HomePage() {
  const [key, setKey] = useState<string>(keyData);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("click", () => {
          removeActiveClasses();
          panel.classList.add("active");
        });
      });
    };
  }, []);

  function removeActiveClasses() {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  return (
    <div>
      <div className="title">
        <h1>Welcome To Dream Job</h1>
      </div>
      <div className="body">
        <div className="container">
          <div id="panel1" className="panel active">
            <h1>Become A Scientist</h1>
          </div>
          <div id="panel2" className="panel">
            <h1>Become A Engineer</h1>
          </div>
          <div id="panel3" className="panel">
            <h1>Become A Doctor</h1>
          </div>
          <div id="panel4" className="panel">
            <h1>Become A Developer</h1>
          </div>
          <div id="panel5" className="panel">
            <h1>Explore Your Career Choice</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="column">
            <header>Basic Questions Page</header>
            <p>
              The "Basic" button will take you to the Basic Questions Page. The
              basic questions will take less time to complete and give you a
              general analysis of what career paths you should consider.
            </p>
          </div>
          <div className="column">
            <header>Detailed Questions Page</header>
            <p>
              The "Detailed" button will take you to the Detailed Questions
              Page. The detailed questions will take more time and will give you
              a more in-depth analysis of the career path you should consider.
            </p>
          </div>
        </div>
      </div>

      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Insert API Key Here"
          onChange={changeKey}
        ></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
