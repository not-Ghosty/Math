import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/prime.png";
const Prime = () => {
  let [data, setData] = useState("");
  let [show, setShow] = useState(true);
  let [yes, setYes] = useState(false);
  let [no, setNo] = useState(false);
  let [fillform, setFillform] = useState(true);
  let [range1, setRange1] = useState("");
  let [range2, setRange2] = useState("");
  let [rshow, setRShow] = useState(true);
  let [nop, setNop] = useState(0);
  let [allprime, setAllprime] = useState("");
  let [rfillform, setRFillform] = useState(true);

  let inputchange = (e) => {
    setData(e.target.value);
    setFillform(true);
    setShow(true);
    setYes(false);
    setNo(false);
  };

  let r1Change = (e) => {
    setRange1(e.target.value);
    setRFillform(true);
    setRShow(true);
  };
  let r2Change = (e) => {
    setRange2(e.target.value);
    setRFillform(true);
    setRShow(true);
  };

  let check = (e) => {
    e.preventDefault();
    if (data.length > 0) {
      setShow(false);
      /*logic area */
      var n = data;
      let count = 0;
      for (var i = 2; i < n / 2; i++) {
        if (n % i == 0) {
          count++;
        }
      }
      if (count == 0) {
        setYes(true);
      } else {
        setNo(true);
      }
      /*logic area */
    } else {
      setFillform(false);
    }
  };

  let find = (e) => {
    e.preventDefault();

    if (range1.length > 0 && range2.length > 0) {
      setRShow(false);

      for (var i = parseInt(range1); i <= parseInt(range2); i++) {
        let count = 0;

        for (var j = 2; j < i; j++) {
          if (i % j == 0) {
            count++;
          }
        }
        if (count == 0 && i != 0 && i != 1) {
          nop = nop + 1;
          allprime = allprime + " " + i + "  ";
        }
      }
      setNop(nop);
      setAllprime(allprime);
    } else {
      setRFillform(false);
    }
  };

  let reset = (e) => {
    e.preventDefault();
    setRange1("");
    setRange2("");
    setNop(0);
    setAllprime("");
    setRFillform(true);
    setRShow(true);
  };
  return (
    <div id={a.perfect}>
      <div className={a.gap}> </div>
      <div className={a.intro_div}>
        <h1>How to find a Prime number?</h1>
        <br />
        <p>
          {" "}
          A prime number (or a prime) is a natural number greater than 1 that is
          not a product of two smaller natural numbers. A natural number greater
          than 1 that is not prime is called a composite number.
        </p>
        <img src={imga} id={a.strong_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is <strong>Prime number</strong>{" "}
          or not.
        </label>{" "}
        <br />
        <input
          type="number"
          value={data}
          placeholder="  Enter value"
          onChange={inputchange}
        />{" "}
        <button onClick={check} type="submit">
          Check
        </button>{" "}
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
                    {data} {"is a Prime number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is a composite number"}
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

      <form className={a.action_div}>
        <label>Lets Find Prime numbers between ranges</label> <br />
        <label>Prime numbers between: </label>
        {"      "}
        <input
          type="number"
          id={a.sec_input}
          value={range1}
          onChange={r1Change}
          placeholder="  0"
        />{" "}
        <input
          type="number"
          id={a.sec1_input}
          value={range2}
          onChange={r2Change}
          placeholder="  100"
        />
        {"  "}
        <button onClick={find} type="submit">
          Find
        </button>
        {"  "}
        <input onClick={reset} type="submit" value="Reset" id={a.reset_input} />
        <br />
        {rfillform ? <></> : <>Enter both ranges</>}
        <div className={a.ans_div}>
          Answer:
          <span>
            {rshow ? (
              <></>
            ) : (
              <>
                <span>
                  There are <strong>{nop}</strong> prime numbers present between{" "}
                  <strong>{range1}</strong> and <strong>{range2}</strong> and
                  the numbers are <br />
                  <strong>{allprime}</strong>
                </span>
              </>
            )}
          </span>
        </div>
      </form>
      <div className={a.gap}> </div>
      <div className={a.conclusion_div}>
        <strong>
          Example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
          59, 61, 67, 71, 73, 79, 83, 89, 97 <br /> <br /> are the prime numbers
          from 1 to 100.
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Prime;
