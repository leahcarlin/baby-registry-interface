import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.scss";

export default function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
