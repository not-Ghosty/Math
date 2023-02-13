import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/strong.png";
const Strong = () => {
  let [data, setData] = useState("");
  let [show, setShow] = useState(true);
  let [yes, setYes] = useState(false);
  let [no, setNo] = useState(false);
  let [fillform, setFillform] = useState(true);

  let inputchange = (e) => {
    setData(e.target.value);
    setFillform(true);
    setShow(true);
    setYes(false);
    setNo(false);
  };

  let check = (e) => {
    e.preventDefault();
    if (data.length > 0) {
      setShow(false);
      /*logic area */
      var sum = 0;
      var x = parseInt(data);

      let fact = (n) => {
        var fact = 1;
        while (n > 1) {
          fact = fact * n;
          n--;
        }
        return fact;
      };

      do {
        var r = x % 10;
        sum = sum + fact(r);
        x = Math.floor(x / 10);
      } while (x != 0);

      if (sum == data) {
        setYes(true);
      } else {
        setNo(true);
      }
      /*logic area */
    } else {
      setFillform(false);
    }
  };

  let reset = (e) => {
    e.preventDefault();
    setData("");
    setYes(false);
    setNo(false);
  };
  return (
    <div id={a.perfect}>
      <div className={a.gap}> </div>
      <div className={a.intro_div}>
        <h1>How to find a Strong number?</h1>
        <br />
        <p>
          {" "}
          A special number whose sum of factorial of each digits of the number
          gives the number itself is a{" "}
          <strong>
            <u>Strong number</u>
          </strong>
          .
        </p>
        <img src={imga} id={a.strong_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is <strong>Strong number</strong>{" "}
          or not.
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
                {yes ? (
                  <>
                    {data} {"is a Strong number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is not a Strong number"}
                  </>
                ) : (
                  <></>
                )}
              </span>
            )}
          </span>
        </div>
      </form>
      <div className={a.gap}> </div>
      <div className={a.conclusion_div}>
        <strong>
          Only 1, 2, 145 sre the Strong numbers from 1 to 1000 because <br />{" "}
          <br />
          1! = 1 <br /> <br /> <br />
          2! = 2 <br /> <br /> <br />
          (1!+ 4!+ 5!) = 145
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Strong;
