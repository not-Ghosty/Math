import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/disarium.png";
const Disarium = () => {
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
      /*logic area single */
      var n = parseInt(data);

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
      var sum = 0,
        temp = n;

      while (temp != 0) {
        var r = temp % 10;
        sum = sum + power(r, digits);
        digits--;
        temp = parseInt(temp / 10);
      }
      console.log("value of sum: " + sum);
      if (sum == data) {
        setYes(true);
      } else {
        setNo(true);
      }
      /*logic area single*/
    } else {
      setFillform(false);
    }
  };

  let find = (e) => {
    e.preventDefault();

    if (range1.length > 0 && range2.length > 0) {
      setRShow(false);
      let countdigit = (x) => {
        var count = 0;
        do {
          count++;
          x = Math.floor(x / 10);
        } while (x != 0);
        //   console.log("value of count: " + count);
        return count;
      };

      let power = (num, pow) => {
        var prod = 1;
        //   console.log("value of num: " + num);
        //   console.log("value of pow: " + pow);
        while (pow > 0) {
          prod *= num;
          pow--;
        }
        //   console.log("value of prod: " + prod);
        return prod;
      };

      for (var i = parseInt(range1); i <= parseInt(range2); i++) {
        var digits = countdigit(i);
        var sum = 0,
          temp = i;
        while (temp != 0) {
          var r = temp % 10;
          sum = sum + power(r, digits);
          digits--;
          temp = parseInt(temp / 10);
        }
        //   console.log("value of sum: " + sum);
        if (sum == i) {
          nop = nop + 1;
          allprime = allprime + " " + i;
          // console.log("sum :"+sum+ " i: "+i+ " is a disarium");

          // console.log("value of nod: "+nod);
          // console.log("value of alldiss: "+alldiss);
        } else {
          // console.log("sum : "+sum+ " i: "+i+ "not a disarium");
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
        <h1>How to find a Disarium number?</h1>
        <br />
        <p>
          {" "}
          The Sum of the digits of a number powered with their respective
          position will give the number itself is a
          <strong> Disarium number</strong>. .
        </p>
        <img src={imga} id={a.disarium_img} />
      </div>
      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide a number to find whether it is{" "}
          <strong>Disarium number</strong> or not.
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
                    {data} {"is a Disarium number"}
                  </>
                ) : (
                  <></>
                )}
                {no ? (
                  <>
                    {data} {"is not a Disarium number"}
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
        <label>Lets Find Disarium numbers between ranges</label> <br />
        <label>Disarium numbers between: </label>
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
                  There are <strong>{nop}</strong> disarium numbers present
                  between <strong>{range1}</strong> and{" "}
                  <strong>{range2}</strong> and the numbers are <br />
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
          Example: 1 2 3 4 5 6 7 8 9 89 135 175 518 598 1306 1676 2427 are the
          Disarium numbers
        </strong>
      </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Disarium;
