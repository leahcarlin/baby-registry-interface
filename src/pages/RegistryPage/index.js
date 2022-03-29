import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems } from "../../store/item/actions";
import { selectAllItems } from "../../store/item/selectors";

export default function RegistryPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  console.log("item", items);

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

  return (
    <div class="container">
      {items.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}
