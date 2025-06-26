const note = require("../models/Notes");
const jwt = require("jsonwebtoken");

const createNote = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { title, content } = req.body;

    const notes = await note.create({
      title,
      content,
      user: decoded.id,
    });

    res.status(201).json({message:"Note Created"});
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

//get notes

const getNote = async (req, res) => {
  try {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //fetch note

    const notes = await note
      .find({ user: decoded.id })
      .sort({ timestamp: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: "Unauthorized" });
  }
};


//update

const UpdateNote = async(req,res)=>{

  try {
    
    const token = req.cookies.token;
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const {id} = req.params;
    const {title,content} = req.body;

    const updnote = await note.findOneAndUpdate(

      {_id:id, user:decoded.id}, //Find the note with _id equal to id And make sure it belongs to the currently logged-in user (decoded.id from JWT
      {title,content}, //update content
      {new:true}, //return updated document

    );

    res.status(200).json({message:"Note Updated"});
    

  } catch (error) {

    res.status(400).json({message:"Unauthorized"});
    
  }

};

  const DeleteNote = async(req,res)=>{

    try {

      const token = req.cookies.token;
      const decoded = jwt.verify(token,process.env.JWT_SECRET);

      const {id} = req.params;
      
      const delNote = await note.findOneAndDelete({_id:id, user:decoded.id});

      res.status(200).json({message:"Note Deleted"});

    } catch (error) {

      res.status(400).json(error);

      
    }
  };




module.exports = { createNote, getNote, UpdateNote ,DeleteNote};
