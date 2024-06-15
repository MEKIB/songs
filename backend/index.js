const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let songs = []; // This will act as our in-memory "database"

// Routes
app.get("/songs", (req, res) => {
  res.json(songs);
});

app.post("/songs", (req, res) => {
  const newSong = { id: Date.now(), ...req.body };
  songs.push(newSong);
  res.status(201).json(newSong);
});

app.put("/songs/:id", (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex((song) => song.id == id);
  if (index !== -1) {
    songs[index] = { ...songs[index], ...req.body };
    res.json(songs[index]);
  } else {
    res.status(404).json({ message: "Song not found" });
  }
});

app.delete("/songs/:id", (req, res) => {
  const { id } = req.params;
  const index = songs.findIndex((song) => song.id == id);
  if (index !== -1) {
    const deletedSong = songs.splice(index, 1);
    res.json(deletedSong);
  } else {
    res.status(404).json({ message: "Song not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
