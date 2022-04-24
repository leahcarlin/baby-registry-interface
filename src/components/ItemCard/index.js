import React from "react";
import "./ItemCard.scss";

export default function ItemCard(props) {
  const { items, show, handleClick } = props;

  return (
    <div className="item-container">
      {items.map((item) => (
        <div className="card-container" key={item.id}>
          <a target="_blank" rel="noreferrer" href={item.itemUrl}>
            <div className="card-img">
              <img src={item.imgUrl} alt={item.title} />
            </div>
          </a>
          <h3>{item.title}</h3>
          <p>{item.details}</p>
          <div className="details">
            <p>
              <strong>Buy Directly From</strong>
            </p>
            <ul>
              <li>{item.shortUrl}</li>
              <li>€{item.price}</li>
              <li>
                <a target="_blank" rel="noreferrer" href={item.itemUrl}>
                  <button>Buy</button>
                </a>
              </li>
            </ul>
          </div>
          <div className="purchased">
            <button
              id={item.id}
              key={item.id}
              value={item.id}
              type="button"
              onClick={handleClick}
            >
              {!show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              )}
              <p>I've purchased this</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
