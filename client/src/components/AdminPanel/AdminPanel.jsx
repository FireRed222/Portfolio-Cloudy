import { useState, useEffect } from "react";
import axios from "axios";
import s from "./AdminPanel.module.css";

const API_URL = "https://portfolio-cloudy.onrender.com/cards";

const AdminPanel = ({ onLogout }) => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quote: "", job: "", src: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(API_URL);
      setItems(res.data);
    };
    fetchItems();
  }, []);

  const handleSubmit = async () => {
    if (!form.name.trim()) return;

    if (editId) {
      const res = await axios.put(`${API_URL}/${editId}`, form);
      setItems((prev) =>
        prev.map((item) => (item.id === editId ? res.data : item))
      );
    } else {
      const res = await axios.post(API_URL, form);
      setItems((prev) => [...prev, res.data]);
    }

    setForm({ name: "", quote: "", job: "", src: "" });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      quote: item.quote,
      job: item.job,
      src: item.src,
    });
    setEditId(item.id);
  };

  return (
    <div className={s.container}>
      <button onClick={onLogout} className={s.btn}>
        Logout
      </button>
      <div className={s.panel}>
        <h2 className={s.ttl}>Admin Panel</h2>
        <input
          className={s.input}
          placeholder="Img Source"
          value={form.src}
          onChange={(e) => setForm({ ...form, src: e.target.value })}
        />
        <input
          className={s.input}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          className={s.input}
          placeholder="Quote"
          value={form.quote}
          onChange={(e) => setForm({ ...form, quote: e.target.value })}
        />
        <input
          className={s.input}
          placeholder="Job"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
        />
        <button className={s.btn} onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>

        <ul>
          {items.map((item) => (
            <li key={item.id} className={s.item}>
              <strong>{item.name}:</strong> {item.description}
              <button onClick={() => handleEdit(item)} className={s.edit}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className={s.delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
