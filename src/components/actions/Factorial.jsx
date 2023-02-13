import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/factorial.png";
const Xylem = () => {
  let [data, setData] = useState("");
  let [show, setShow] = useState(true);
  let [fact, setFact] = useState(1);
  let [fillform, setFillform] = useState(true);

  let inputchange = (e) => {
    setData(e.target.value);
    setFillform(true);
    setShow(true);
    setFact(1);
  };

  let check = (e) => {
    e.preventDefault();
    if (data.length > 0) {
      setShow(false);
      /*logic area */
      var x = parseInt(data);
      for (let i = x; i > 1; i--) {
        fact *= i;
        setFact(fact);
      }

      /*logic area */
    } else {
      setFillform(false);
    }
  };

  let reset = (e) => {
    e.preventDefault();
    setData("");
    setFact(1);
    setShow(true);
  };
  return (
    <div id={a.perfect}>
      <div className={a.gap}> </div>
      <div className={a.intro_div}>
        <h1>What is a factorial number?</h1>

        <p>
          factorial, in mathematics, the product of all positive integers less
          than or equal to a given positive integer and denoted by that integer
          and an exclamation point. Thus, factorial seven is written 7!, meaning
          1 {"×"} 2 {"×"} 3{"×"} 4 {"×"} 5 {"×"} 6 {"×"} 7.
        </p>
        <img src={imga} alt="/" id={a.factorial_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find its <strong>Factorial</strong>
        </label>{" "}
        <br />
        <input
          type="number"
          value={data}
          onChange={inputchange}
          placeholder=" Enter value"
        />{" "}
        <button onClick={check} type="submit">
          Check
        </button>{" "}
        <input onClick={reset} type="submit" value="Reset" id={a.reset_input} />
        <br />
        {fillform ? <></> : <>Type a number</>} <br />
        <div className={a.ans_div}>
          Answer:{" "}
          <span>
            {show ? (
              <></>
            ) : (
              <span>
                <>
                  Factorial of {data}
                  {"!"} is {fact}
                </>
              </span>
            )}
          </span>
        </div>
      </form>
      <div className={a.gap}> </div>
      <div className={a.conclusion_div}>
        <strong>
          Examples: <br />
          The factorial of 6! is 1*2*3*4*5*6 = 720 <br />
          The factorial of 11! is 1*2*3*4*5*6*7*8*9*10*11= 39916800.
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Xylem;
