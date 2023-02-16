import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/images.png";
const Perfect = () => {
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
      var sum = 0;
      var n = parseInt(data);
      for (var i = 1; i < n - 1; i++) {
        if (n % i === 0) {
          sum = sum + i;
          console.log(sum);
        }
      }
      if (sum == data) {
        setYes(true);
      } else {
        setNo(true);
      }
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
        <h1>How to find a Perfect number?</h1>
        <br />
        <p>
          {" "}
          A positive integer which is equal to its sum of proper divisors
          excluding the number itself is a{" "}
          <strong>
            <u>Perfect number</u>
          </strong>
          .
        </p>
        <img id={a.perfect_img} src={imga} alt="" />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is <strong>Perfect</strong> or
          not.
        </label>{" "}
        <br />
        <input type="number" value={data} onChange={inputchange} />{" "}
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
                    {data} {"is a Perfect number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is not a Perfect number"}
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
          Only 6, 28, 496, 8128 are the perfect numbers from 1 to 10000
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Perfect;
