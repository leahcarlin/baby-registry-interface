import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">So sweet! 💗 Who is this from?</h2>
      </div>
      <div className="modal-body">
        <form>
          <label>Name(s)</label>
          <input type="text"></input>
        </form>
      </div>
      <div className="modal-footer">
        <button className="footer-btn">Cancel</button>
        <button className="footer-btn">Submit</button>
      </div>
    </div>
  );
}
