import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="container">
      <section class="hero">
        <div class="background-image"></div>
        <div class="hero-content-area">
          <h1>Baby Carlin Registry</h1>
          <h3>
            Arrival Date <span>July 9, 2022</span>
          </h3>
          <div className="button-container">
            <Link className="button" to="/registry">
              <button>How It Works</button>
            </Link>
            <Link className="button" to="/registry">
              <button>Take me to the Registry</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
