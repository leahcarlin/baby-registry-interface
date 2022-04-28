import React, { useEffect, useState } from "react";
import "../AdminPage/AdminPage.scss";
import {
  addNewItem,
  fetchAllItems,
  deleteItem,
} from "../../store/item/actions";
import { selectAllItems } from "../../store/item/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function AdminPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [itemUrl, setItemUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewItem(title, imgUrl, price, itemUrl, shortUrl, details));
    setTitle("");
    setImgUrl("");
    setPrice(0);
    setItemUrl("");
    setShortUrl("");
    setDetails("");
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <h4>Add an item</h4>
      <div className="add-item-container">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Image Url:
            <input
              type="url"
              name="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Item Url:
            <input
              type="url"
              name="itemUrl"
              value={itemUrl}
              onChange={(e) => setItemUrl(e.target.value)}
            />
          </label>
          <label>
            Short Url:
            <input
              type="text"
              name="shortUrl"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
            />
          </label>
          <label>
            Details:
            <input
              type="text"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </label>
          <input type="submit" name="submit" />
        </form>
      </div>
      <div className="item-list-container">
        <h4>Item List</h4>
        {items ? (
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Id</th>
                <th>Fulfilled</th>
                <th>Sender</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.id}</td>
                  <td>{item.fulfilled ? "yes" : null}</td>
                  <td>{item.sender ? item.sender.name : null}</td>
                  <td>{item.sender ? item.sender.giftMessage : null}</td>
                  <td>
                    <button onClick={() => dispatch(deleteItem(item.id))}>
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
