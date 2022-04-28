import React, { useState } from "react";
import { markFulfilled, markPurchased } from "../../store/item/actions";
import { useDispatch } from "react-redux";
import "./Modal.scss";

export default function Modal(props) {
  const { show, setShow, checkValue, setCheckValue, setFilter } = props;
  const [giftMessage, setGiftMessage] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onCancel = () => {
    setShow(!show);
    setCheckValue(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(checkValue, giftMessage, name);
    dispatch(markPurchased(checkValue, giftMessage, name));
    dispatch(markFulfilled(checkValue));
    setCheckValue(null);
    setGiftMessage("");
    setName("");
    setShow(!show);
    setFilter("fulfilled");
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Gift message (optional)
            <textarea
              rows="4"
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
            ></textarea>
          </label>
        </form>
      </div>
      <div className="modal-footer">
        <button className="footer-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="footer-btn" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
