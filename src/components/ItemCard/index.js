import React from "react";
import "./ItemCard.scss";

export default function ItemCard(props) {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
        <div className="card-container" key={item.id}>
          <div className="card-img">
            <img src={item.imgUrl} alt={item.title} />
          </div>
          <p>{item.description}</p>
          <div className="details">
            <p>
              <strong>Buy Directly From</strong>
            </p>
            <ul>
              <li>{item.shortUrl}</li>
              <li>{item.price}</li>
              <li>
                <button>Buy</button>
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
