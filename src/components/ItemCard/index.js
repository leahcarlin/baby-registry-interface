import React from "react";
import "./ItemCard.scss";

export default function ItemCard(props) {
  const { items } = props;

  return (
    <div className="item-container">
      {items.map((item) => (
        <div className="card-container" key={item.id}>
          <div className="card-img">
            <img src={item.imgUrl} alt={item.title} />
          </div>
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
            <label>
              <input type="checkbox" />
              I've purchased this
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
