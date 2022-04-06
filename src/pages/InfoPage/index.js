import React from "react";
import "./InfoPage.scss";

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
          <div className="text">
            <h3>Open Link in Google Chrome</h3>
            <p>
              Clicking the 'Buy' button from the Registry page will take you
              directly to the website where you can purchase the item(s). Make
              sure you open the link in <u>Google Chrome</u>.
            </p>
          </div>
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </div>
        </div>
        <div className="instructions">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-translate"
              viewBox="0 0 16 16"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
          </div>
          <div className="text">
            <h3>Translate Website</h3>
            <p>
              By default, Chrome offers to translate pages written in a language
              you don't understand. You can translate either by clicking
              'Translate' at the top or by right-clicking anywhere on the page
              then, 'Translate to English'.
            </p>
          </div>
        </div>
        <div className="instructions">
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
          </div>
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
        </div>
        <div className="instructions">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
            </svg>
          </div>
          <div className="text">
            <h3>Mark Item as Purchased</h3>
            <p>
              Don't forget to return to the Registry page and mark the item(s)
              as purchased. There you'll also have the option to write a message
              to us so we'll know who to thank for the very special gift!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
