import React, { useEffect } from "react";
import "../AdminPage/AdminPage.scss";
import { fetchAllItems } from "../../store/item/actions";
import { selectAllItems } from "../../store/item/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function AdminPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  console.log("items?", items);

  useEffect(() => {
    dispatch(fetchAllItems);
  }, [dispatch]);

  return (
    <div>
      <h2>Admin Page</h2>
      <h4>Add an item</h4>
      <div className="add-item-container">
        <form>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Image Url:
            <input type="url" name="imgUrl" />
          </label>
          <label>
            Price:
            <input type="number" name="price" />
          </label>
          <label>
            Item Url:
            <input type="url" name="itemUrl" />
          </label>
          <label>
            Short Url:
            <input type="url" name="shortUrl" />
          </label>
          <label>
            Details:
            <input type="text" name="details" />
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
                    <button>x</button>
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
