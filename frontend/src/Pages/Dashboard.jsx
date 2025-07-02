import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Dashboard.css";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user profile on mount
  useEffect(() => {
    axios
      .get("https://notenest-aphs.onrender.com/api/profile")
      .then((res) => setUser(res.data))
      .catch(() => {
        toast.error("Not authenticated",{position:"top-center"});
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.get("https://notenest-aphs.onrender.com/api/logout");
      toast.success("Logged out",{position:"top-center"});
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed",{position:"top-center"});
    }
  };

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get("https://notenest-aphs.onrender.com/api/get");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    await axios.delete(`https://notenest-aphs.onrender.com/api/delete/${id}`);
    toast.success("Note Deleted",{position:"top-center"});

    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard-container">
      {/* ✅ User Info */}
      {user ? (
        <div className="user-info">
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user...</p>
      )}

      {/* ✅ Header */}
      <div className="dashboard-header">
        <h2>My Notes</h2>
        <button className="add-btn" onClick={() => navigate("/create")}>➕ Add Note</button>
      </div>

      {/* ✅ Notes List or Empty State */}
      {notes.length === 0 ? (
        <div className="no-data">
          <h3>No notes found</h3>
          <p>Please add a new note</p>
        </div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <div className="note-card" key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <button onClick={() => navigate(`/update/${note._id}`, { state: note })}>✏️ Edit</button>
                <button onClick={() => deleteNote(note._id)}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
