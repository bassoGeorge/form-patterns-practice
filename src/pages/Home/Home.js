import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to form testing project</h1>
      <main>
        <h3>Experiments</h3>
        <ol>
          <li>
            <Link to="/ch01">Registration Form</Link>
          </li>
          <li>Advance form</li>
        </ol>
      </main>
    </>
  );
}
