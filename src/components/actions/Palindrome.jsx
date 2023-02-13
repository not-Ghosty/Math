import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/palindrome.png";
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
    if (data.length > 0 && data.length > 2) {
      setShow(false);
      /*logic area */
      var x = parseInt(data);
      var temp = x;
      var rev = 0;
      while (x != 0) {
        var r = x % 10; //12321
        rev = rev * 10 + r;
        x = parseInt(x / 10);
      }

      if (rev == temp) {
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
        <h1>How to find a number is Palindrome or not?</h1>

        <p>
          A number which remains the same after we reverse its digits is a
          <strong> Palindrome number</strong>.
        </p>
        <img src={imga} id={a.palindrome_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is{" "}
          <strong>Palindrome number</strong> or not.
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
                    {data} {"is a Palindrome number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is not a palindrome number"}
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
          Examples: <br />
          121, 484, 676, 10201, 12321, 3663, 72911927, 829928..etc <br />
          are palindromes.
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Xylem;
