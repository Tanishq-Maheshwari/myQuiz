import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "react-compound-timer";

function Start() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  // const [clear, setClear] = useState(false);
  const [isChecked, setChecked] = useState([
    { check: false },
    { check: false },
    { check: false },
    { check: false },
    { check: false }
  ]);
  const questions = [
    {
      que: "What year did the first Iron Man movie come out?",
      o1: "2006",
      o2: "2008",
      o3: "2010",
      o4: "2012"
    },
    {
      que: "What is Captain America's shield made out of?",
      o1: "Plastics and bits of cardboard",
      o2: "Adamantium",
      o3: "Vibranium",
      o4: "Titanium alloy"
    },
    {
      que: "What name did Black Widow use in Iron Man 2 for Stark Industries?",
      o1: "Nateline Rushman",
      o2: "Karen",
      o3: "Natasha Romanoff",
      o4: "Scarlet"
    },
    {
      que: "What does Peter Parker's spider-sense do?",
      o1: "Wobbles",
      o2: "Shivers",
      o3: "Tingles",
      o4: "Beeps"
    },
    {
      que: "How did Bruce Bannner become the great Hulk",
      o1: "He was struck by lightning",
      o2: "He gained super powers after using gamma radiation in an experiment",
      o3: "A smaller Hulk bit him on the hand",
      o4: "He found a magical pair of jeans"
    }
  ];
  const answers = ["2", "3", "1", "3", "2"];

  const backImg = [
    {
      background:
        "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(https://media.giphy.com/media/j60ApxGWly8qG53DHo/giphy.gif) no-repeat center white"
    },
    {
      background:
        "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(https://media.giphy.com/media/TddktwPq3JhQaOd8sm/giphy.gif) no-repeat center white"
    },
    {
      background:
        "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(https://media.giphy.com/media/M9UbDdpPTEFzsXIjgu/giphy.gif) no-repeat center white"
    },
    {
      background:
        "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(https://media.giphy.com/media/TKLdhXUt2S36V1KnA6/giphy.gif) no-repeat center white"
    },
    {
      background:
        "linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)),url(https://media.giphy.com/media/YPJfbyX8n2j1TMzngW/giphy.gif) no-repeat center white"
    }
  ];

  const [customColor, setCustomColor] = useState([
    { backgroundColor: "yellow" },
    { backgroundColor: "yellow" },
    { backgroundColor: "yellow" },
    { backgroundColor: "yellow" },
    { backgroundColor: "yellow" }
  ]);

  function handleClick(event) {
    const clickValue = event.target.value;
    setCustomColor((customColor) => {
      return customColor.map((cColor, ind) => {
        if (ind === count) return { backgroundColor: "green" };
        return cColor;
      });
    });
    if (!isChecked[count].check && clickValue === answers[count]) {
      setCorrect((correct) => correct + 1);
      setChecked((isChecked) => {
        return isChecked.map((checked, ind) => {
          if (ind === count) {
            return { check: true };
          }
          return checked;
        });
      });
      // console.log("In if");
    } else if (isChecked[count].check && clickValue !== answers[count]) {
      setCorrect((correct) => correct - 1);
      setChecked((isChecked) => {
        return isChecked.map((checked, ind) => {
          if (ind === count) {
            return { check: false };
          }
          return checked;
        });
      });
    }
  }
  // let stop = false;
  // function startTimer() {
  //   var seconds = 10;

  //   var interval = setInterval(function () {
  //     seconds--;
  //     document.getElementById("timer-two").innerHTML = seconds;
  //     if (seconds === 0) {
  //       stop = true;
  //       clearInterval(interval);
  //       document.getElementById("timer-two").innerHTML = "0";
  //       document.getElementById("submitResult").click();
  //     }
  //   }, 1000);
  // }
  // if (!stop) startTimer();

  return (
    <div>
      <div className="timer">
        <p id="timer-two">
          <Timer
            initialTime={120000}
            direction="backward"
            checkpoints={[
              {
                time: 0,
                callback: () => {
                  document.getElementById("submitResult").click();
                }
              }
            ]}
          >
            {() => (
              <React.Fragment>
                <Timer.Minutes />:
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
        </p>
      </div>
      <div className="question">
        <div className="quiz-box" style={backImg[count]}>
          <div className="que">
            <p>
              Q.{count + 1} {questions[count].que}
            </p>
          </div>
          <div className="options">
            <form>
              <input
                type="radio"
                value="1"
                name="option"
                onClick={handleClick}
              />
              <span> {questions[count].o1}</span>
              <br />
              <input
                type="radio"
                value="2"
                name="option"
                onClick={handleClick}
              />
              <span> {questions[count].o2}</span>
              <br />
              <input
                type="radio"
                value="3"
                name="option"
                onClick={handleClick}
              />
              <span> {questions[count].o3}</span>
              <br />
              <input
                type="radio"
                value="4"
                name="option"
                onClick={handleClick}
              />
              <span> {questions[count].o4}</span>
              <br />
              <button
                onClick={(e) => {
                  setCount((count) => {
                    if (count - 1 === -1) return 4;
                    else return count - 1;
                  });
                  var ele = document.getElementsByName("option");
                  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
                  e.preventDefault();
                }}
              >
                Prev
              </button>
              <button
                onClick={(e) => {
                  setCount((count) => {
                    if (count + 1 === 5) return 0;
                    else return count + 1;
                  });
                  var ele = document.getElementsByName("option");
                  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
                  e.preventDefault();
                }}
              >
                Next
              </button>
            </form>
          </div>
        </div>
        <div className="question-box">
          <p
            className="question-no"
            style={customColor[0]}
            onClick={() => {
              setCount((count) => 0);
            }}
          >
            1
          </p>
          <p
            className="question-no"
            style={customColor[1]}
            onClick={() => {
              setCount((count) => 1);
            }}
          >
            2
          </p>
          <p
            className="question-no"
            style={customColor[2]}
            onClick={() => {
              setCount((count) => 2);
            }}
          >
            3
          </p>
          <p
            className="question-no"
            style={customColor[3]}
            onClick={() => {
              setCount((count) => 3);
            }}
          >
            4
          </p>
          <p
            className="question-no"
            style={customColor[4]}
            onClick={() => {
              setCount((count) => 4);
            }}
          >
            5
          </p>
        </div>
      </div>
      <div className="end-quiz">
        <button>
          <Link
            to={{
              pathname: "/result",
              prop: { score: correct }
            }}
            id="submitResult"
            className="link"
          >
            End quiz
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Start;
