import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  const { show, setShow, setCheckValue } = props;

  const onCancel = () => {
    setShow(!show);
    setCheckValue(null);
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title">So sweet! 💗 Who is this from?</h2>
      </div>
      <div className="modal-body">
        <form>
          <label>
            Name(s)
            <input type="text"></input>
          </label>
          <label>
            Gift message (optional)
            <textarea rows="4"></textarea>
          </label>
        </form>
      </div>
      <div className="modal-footer">
        <button className="footer-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="footer-btn">Submit</button>
      </div>
    </div>
  );
}
