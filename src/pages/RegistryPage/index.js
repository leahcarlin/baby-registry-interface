import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../../store/item/actions";
import { selectAllItems } from "../../store/item/selectors";
import ItemCard from "../../components/ItemCard";
import "./RegistryPage.scss";

export default function RegistryPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  console.log("item", items);

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
          <li>Still Need</li>
          <li>Fulfilled</li>
        </ul>
      </div>
      {items ? <ItemCard items={items} /> : null}
    </div>
  );
}
