import React, { useState } from "react";
import { Link } from "react-router-dom";
import a from "../main.module.css";
import imga from "../images/strong.png";
const Dayfinder = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  let [show, setShow] = useState(false);
  let [fillform, setFillform] = useState(true);

  const calculateDay = () => {
    if (date.length > 0 && month.length > 0 && year.length > 0) {
      const d = new Date(`${month}/${date}/${year}`);
      const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      setDay(daysOfWeek[d.getUTCDay()]);
    } else {
      /*logic area */
      setFillform(false);
    }
  };

  let reset = (e) => {
    e.preventDefault();
    setDate("");
    setMonth("");
    setYear("");
    setShow(true);
  };
  return (
    <div id={a.perfect}>
      <div className={a.gap}> </div>

      <div className={a.gap}> </div>
      <form className={a.action_div}>
        <label>
          Provide the date in <strong>dd/mm/yyyy</strong>
          {"  "}format to get the corresponding <strong>day</strong>.
        </label>{" "}
        <br />
        <input
          id={a.dd_input}
          type="number"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setFillform(true);
          }}
          placeholder=" DD"
        />
        {"   "}
        <input
          id={a.mm_input}
          type="number"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            setFillform(true);
          }}
          placeholder=" MM"
        />
        {"   "}
        <input
          id={a.yy_input}
          type="number"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setFillform(true);
          }}
          placeholder=" YYYY"
        />{" "}
        <button onClick={calculateDay} type="submit">
          Check
        </button>{" "}
        <input onClick={reset} type="submit" value="Reset" id={a.reset_input} />
        <br />
        {fillform ? <></> : <>Type a number</>} <br />
        <div className={a.ans_div}>
          <span>{show ? <></> : <span>{day && <p>{day}</p>}</span>}</span>
        </div>
      </form>
      <div className={a.gap}> </div>
      <Link to="/content">
        <button className={a.back_button}>{" <<<"}Go back </button>
      </Link>
    </div>
  );
};

export default Dayfinder;
