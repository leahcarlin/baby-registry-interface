import React from "react";
import { useState } from "react";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import "./RegistryPage.scss";
import ItemCardFulfilled from "../../components/ItemCardFulfilled";

export default function RegistryPage() {
  const [show, setShow] = useState(false);
  const [checkValue, setCheckValue] = useState(null);
  const [filter, setFilter] = useState("still-need");
  console.log("filter?", filter);

  return (
    <div className="container">
      <div className="title">
        <h2>Baby Carlin Registry</h2>
        <p>
          Arrival Date <strong>July 9, 2022</strong>
        </p>
      </div>
      <div className="filter">
        <ul>
          <li>
            <button onClick={() => setFilter("still-need")}>Still Need</button>
          </li>
          <li>
            <button onClick={() => setFilter("fulfilled")}>Fulfilled</button>
          </li>
        </ul>
      </div>
      {filter === "still-need" ? (
        <ItemCard
          show={show}
          setShow={setShow}
          checkValue={checkValue}
          setCheckValue={setCheckValue}
        />
      ) : (
        <ItemCardFulfilled />
      )}
      {show ? (
        <div className="modal">
          <Modal
            show={show}
            setShow={setShow}
            checkValue={checkValue}
            setCheckValue={setCheckValue}
            setFilter={setFilter}
          />
        </div>
      ) : null}
    </div>
  );
}
