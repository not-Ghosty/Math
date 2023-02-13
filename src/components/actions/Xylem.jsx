import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/xylem.png";
const Xylem = () => {
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
      var x = parseInt(data);
      var exsum = 0,
        meansum = 0,
        temp = x;

      while (x != 0) {
        var r = x % 10;
        if (x == temp || x < 10) {
          exsum = exsum + r;
        } else {
          meansum = meansum + r;
        }
        x = Math.floor(x / 10);
      }

      if (exsum == meansum) {
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
        <h1>How to find Xylem or Phloem?</h1>

        <p>
          A number will be called a <strong>Xylem number</strong> if sum of its
          outermost number digits is equivalent to the sum of internal digit
          digits. If the sum of Outer digits is not equal to the sum of
          remaining internal digits, then the number is called{" "}
          <strong>Phloem number</strong>. .
        </p>
        <img src={imga} id={a.xylem_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is <strong>Xylem number</strong>{" "}
          or <strong>Phloem number</strong>.
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
                    {data} {"is a Xylem number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is a Phloem number"}
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
          Example: <br /> 12225: 1+5 = <u>6</u> and 2+2+2= <u>6</u> =={">"}{" "}
          Xylem number <br /> 12235 : 1+5 = 6 and 2+2+3= 7 =={">"} Phloem
          number. <br />
          34326: 3+6 = <u>9</u> and 4+3+2= <u>9</u> =={">"} Xylem number <br />{" "}
          173156 : 1+6 = 7 and 7+3+1+5= 16 =={">"} Phloem number.
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Xylem;
