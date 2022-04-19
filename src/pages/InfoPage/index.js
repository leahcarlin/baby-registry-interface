import React from "react";
import "./InfoPage.scss";
import { Link } from "react-router-dom";

export default function InfoPage() {
  return (
    <div className="info-container">
      <h1>How it works?</h1>
      <p>
        First, we want to thank you for considering sending Baby Carlin a
        special gift!
      </p>
      <p>
        Since we live all the way in the Netherlands, its easiest to purchase
        items from a Dutch website.
      </p>
      <p>
        We know you don't speak Dutch (we barely do, either) so below are some
        tips on how to navigate with ease.
      </p>
      <div className="instructions-container">
        <div className="instructions">
          <h2>1</h2>
          <div className="text">
            <h3>Open Link in Google Chrome</h3>
            <p>
              Clicking the 'Buy' button from the Registry page will take you
              directly to the website where you can purchase the item(s). Make
              sure you open the link in <strong>Google Chrome</strong>.
            </p>
            <div className="divider"></div>
          </div>
        </div>
        <div className="instructions">
          <h2>2</h2>
          <div className="text">
            <h3>Translate Website</h3>
            <p>
              By default, Chrome offers to translate pages written in a language
              you don't understand. You can translate either by{" "}
              <strong>clicking 'Translate' at the top</strong> or by{" "}
              <strong>
                right-clicking anywhere on the page then, 'Translate to
                English'.
              </strong>
            </p>
            <div className="divider"></div>
          </div>
        </div>
        <div className="instructions">
          <h2>3</h2>
          <div className="text">
            <h3>Enter our Address at Checkout</h3>
            <p>
              Tugelaweg 44E <span>(Street and Apartment #)</span>
            </p>
            <p>
              1092VH <span>(Zip Code)</span>
            </p>
            <p>
              Amsterdam <span>(City)</span>
            </p>
            <p>
              Netherlands <span>(Country)</span>
            </p>
            <div className="divider"></div>
          </div>
        </div>
        <div className="instructions">
          <h2>4</h2>
          <div className="text">
            <h3>Mark Item as Purchased</h3>
            <p>
              Don't forget to return to the Registry page and mark the item(s)
              as purchased. There you'll also have the option to write a message
              to us so we'll know who to thank for the very special gift!
            </p>
          </div>
        </div>
        <Link to="/registry">
          <button>Take me to the Registry</button>
        </Link>
      </div>
    </div>
  );
}
