import React from "react";
import a from "./main.module.css";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <div id={a.content}>
      <div className={a.gap}></div>
      <section id={a.cardholder}>
        <div className={a.card}>
          <h3>Perfect number</h3>
          <p>
            A positive integer which is equal to its sum of proper divisors
            excluding the number itself is a <strong>Perfect number</strong>.
            <br />
            <br />
          </p>
          <button className={a.cardbutton}>
            {" "}
            <Link to="/perfect"> Find Perfect Number</Link>{" "}
          </button>
        </div>
        <div className={a.card}>
          <h3>Strong number</h3>
          <p>
            A special number whose sum of factorial of each digits of the number
            gives the number itself is a <strong>Strong number</strong>.
          </p>
          <button className={a.cardbutton}>
            <Link to="/strong"> Find Strong Number</Link>{" "}
          </button>
        </div>
        <div className={a.card}>
          <h3>Armstrong number</h3>
          <p>
            A positive integer whose sum of the digits raised to the power of
            number of digits gives the number itself is an
            <strong>Armstrong number</strong>.
          </p>
          <button className={a.cardbutton}>
            {" "}
            <Link to="/armstrong"> Find Armstrong</Link>{" "}
          </button>
        </div>
      </section>
      <section id={a.cardholder}>
        <div className={a.card}>
          <h3>Prime number</h3>
          <p>
            <strong>Prime number</strong> is a number that is greater than 1 and
            can be divisible only by 1 and the number itself.
          </p>
          <br />

          <button className={a.cardbutton}>
            <Link to="/prime"> Find Prime Number</Link>{" "}
          </button>
        </div>
        <div className={a.card}>
          <h3>Disarium number</h3>
          <p>
            The Sum of the digits of a number powered with their respective
            position will give the number itself is a
            <strong> Disarium number</strong>.
          </p>
          <button className={a.cardbutton}>
            {" "}
            <Link to="/disarium"> Find Disarium </Link>{" "}
          </button>
        </div>
        <div className={a.card}>
          <h3>Xylem/Phloem number</h3>
          <p>
            In a given number, if the sum of first and last digit is equal to
            the sum of remaining digits then the number is{" "}
            <strong>Xylem</strong> else it is
            <strong> Phloem</strong>.
          </p>
          <button className={a.cardbutton}>
            {" "}
            <Link to="/xylem"> Xylem/phloem</Link>{" "}
          </button>
        </div>
      </section>
      <section id={a.cardholder}>
        <div className={a.card}>
          <h3>Palindrome number</h3>
          <p>
            A number which remains the same after we reverse its digits is a
            <strong> Palindrome number</strong>.
          </p>
          <br />
          <button className={a.cardbutton}>
            {" "}
            <Link to="/palindrome"> Find Palindrome</Link>{" "}
          </button>
        </div>
        <div className={a.card}>
          <h3>Factorial</h3>
          <p>
            the product of all positive integers less than or equal to a given
            positive integer and denoted by that integer and an exclamation
            point.
          </p>
          <button className={a.cardbutton}>
            <Link to="/factorial"> Find Factorial</Link>
          </button>
        </div>
      </section>
      <section id={a.secondcardholder}>
        <div id={a.day_div}>
          <h1>Day Finder</h1>
          <p>
            This section gives what the corresponding day is to whichever date
            provided by the user. <br />
            Provide the date in dd/mm/yyyy format.
          </p>
          <br />
          <h4>Let's find out </h4>
          {"           "}
          <button id={a.daybutton}>
            <Link to="/dayfinder"> Find the day!!{">>>"}</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Content;
