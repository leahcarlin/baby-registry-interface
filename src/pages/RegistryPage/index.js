import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../../store/item/actions";
import { selectAllItems } from "../../store/item/selectors";
import ItemCard from "../../components/ItemCard";
import Modal from "../../components/Modal";
import "./RegistryPage.scss";

export default function RegistryPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

  // const showModal = () => {
  //   console.log("show?", show);
  //   setShow(!show);
  //   return show;
  // };

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
      {items ? <ItemCard items={items} show={show} setShow={setShow} /> : null}
      {show ? (
        <div className="modal">
          <Modal show={show} setShow={setShow} />
        </div>
      ) : null}
    </div>
  );
}
