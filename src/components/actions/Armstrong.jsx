import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/armstrong.png";
const Armstrong = () => {
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
      var n = data;

      let countdigit = (x) => {
        var count = 0;
        do {
          count++;
          x = Math.floor(x / 10);
        } while (x != 0);
        console.log("value of count: " + count);
        return count;
      };

      let power = (num, pow) => {
        var prod = 1;
        console.log("value of num: " + num);
        console.log("value of pow: " + pow);
        while (pow > 0) {
          prod *= num;
          pow--;
        }
        console.log("value of prod: " + prod);
        return prod;
      };

      var digits = countdigit(n);
      console.log(digits);
      var sum = 0,
        temp = n;
      while (temp != 0) {
        var r = temp % 10;
        sum = sum + power(r, digits);
        temp = Math.floor(temp / 10);
        console.log("value of temp: " + temp);
        console.log("value of sum " + sum);
      }

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
        <h1>How to find a Armstrong number?</h1>
        <br />
        <p>
          {" "}
          A positive integer whose sum of the digits raised to the power of the
          number of digits gives the number itself is an{" "}
          <strong>
            <u>Armstrong number</u>
          </strong>
          .
        </p>
        <img src={imga} id={a.armstrong_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is{" "}
          <strong>Armstrong number</strong> or not.
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
                    {data} {"is a Armstrong number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is not a Armstrong number"}
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
          <p>
            {" "}
            The Armstrong numbers of first kind up to 10 digits are 1, 2, 3, 4,
            5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, <br /> <br /> 8208, 9474,
            54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315,
            24678050, <br />
            <br /> 24678051, 88593477, 146511208, 472335975, 534494836,
            912985153, and 4679307774.
          </p>
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Armstrong;
