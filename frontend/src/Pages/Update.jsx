import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Update.css"; // 👈 import CSS
import toast from "react-hot-toast";
const Update = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const note = location.state;

  const [form, setForm] = useState({
    title: note?.title || "",
    content: note?.content || ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:8000/api/update/${id}`, form, {
      withCredentials: true,
    });
    navigate("/dashboard");
    toast.success("Updated",{position:"top-center"});

};

  return (
    <div className="update-container">
      <h2>Edit Note</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="update-input"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        className="update-textarea"
      />
      <button onClick={handleSubmit} className="update-button">
        ✅ Update Note
      </button>
    </div>
  );
};

export default Update;
