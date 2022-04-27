import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../../store/item/actions";
import {
  selectAllItems,
  selectFulfilled,
  selectNeeded,
} from "../../store/item/selectors";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import "./RegistryPage.scss";
import ItemCardFulfilled from "../../components/ItemCardFulfilled";

export default function RegistryPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const stillNeed = useSelector(selectNeeded);
  const fulfilled = useSelector(selectFulfilled);
  const [show, setShow] = useState(false);
  const [checkValue, setCheckValue] = useState(null);
  const [filter, setFilter] = useState("still-need");
  console.log("items", items, "need", stillNeed, "fulfilled", fulfilled);
  console.log("filter?", filter);

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

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
          items={items}
          stillNeed={stillNeed}
          show={show}
          setShow={setShow}
          checkValue={checkValue}
          setCheckValue={setCheckValue}
        />
      ) : (
        <ItemCardFulfilled items={items} fulfilled={fulfilled} />
      )}
      {show ? (
        <div className="modal">
          <Modal
            show={show}
            setShow={setShow}
            checkValue={checkValue}
            setCheckValue={setCheckValue}
          />
        </div>
      ) : null}
    </div>
  );
}
