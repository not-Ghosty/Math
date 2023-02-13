import React from "react";
import a from "./main.module.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div id={a.welcome}>
      <div className={a.gap}> </div>
      <div id={a.welcomecard}>
        <strong>Welcome To Pradeep's Math app</strong> <br />
        <p>
          This app consists of many math solutions. This app includes logic to
          find whether the given number is palindrome, Armstrong, Perfect,
          Strong, Desarium, Xylem or Phloem, etc..,
        </p>{" "}
        <br />
        <p>Try it out now</p>
        <Link id={a.getstarted} to="/content">
          Get started{" >>>"}
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
