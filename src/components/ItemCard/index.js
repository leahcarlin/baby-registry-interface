import React, { useState } from "react";
import "./ItemCard.scss";
import Modal from "../Modal";

export default function ItemCard(props) {
  const { items } = props;
  const [show, setShow] = useState(false);

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
            <label>
              <input type="checkbox" onChange={() => setShow(!show)} />
              I've purchased this
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="modal">
            <Modal show={show} />
          </div>
        </div>
      ))}
    </div>
  );
}
