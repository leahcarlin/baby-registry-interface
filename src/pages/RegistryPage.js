import React, { useEffect } from "react";
import { fetchAllItems } from "../store/item/actions";
import { useDispatch } from "react-redux";

export default function RegistryPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

  return <div>RegistryPage</div>;
}
