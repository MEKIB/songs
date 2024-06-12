// src/components/SongList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading, Form, Input, Button, List, ListItem, ListItemText } from './SongStyle';
import { addSong, editSong, deleteSong } from '../redux/SongSlice';

const SongList = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs.list);
  const handleAddSong = () => {
    if (editId) {
      dispatch(editSong({ id: editId, title, artist }));
      setEditId(null);
    } else {
      dispatch(addSong({ id: Date.now(), title, artist }));
    }
    setTitle('');
    setArtist('');
  };

  const handleEdit = (song) => {
    setTitle(song.title);
    setArtist(song.artist);
    setEditId(song.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  return (
    <Container 
      p={[3, 4]}
      maxWidth="600px"
      bg="aliceblue"
      borderRadius="8px"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      margin="40px auto"
    >
      <Heading fontSize={[4, 5]} color='black'>Song lists</Heading>
      <Form>
        <Input
          p={[1]}
          border="1px solid"
          borderRadius="4px"
          borderColor="secondary"
          fontSize={[1, 3]}
          placeholder="Song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          p={[1]}
          border="1px solid"
          borderRadius="4px"
          borderColor="secondary"
          fontSize={[1, 3]}
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <Button
          p={[1]}
          borderRadius="4px"
          bg="secondary"
          color='white'
          fontSize={[1, 3]}
          hoverColor="#9153d3"
          onClick={handleAddSong}
        >
          {editId ? 'Edit Song' : 'Add Song'}
        </Button>
      </Form>
      <List>
        {songs.map(song => (
          <ListItem key={song.id}>
            <ListItemText>
              {song.title} ..... {song.artist}
            </ListItemText>
            <Button
              marginRight="5px"
              borderRadius="4px"
              p={[1]}
              fontSize={[1, 3]}
              color='white'
              bg="success"
              hoverColor="yellowgreen"
              onClick={() => handleEdit(song)}
            >
              Edit
            </Button>
            <Button
              marginRight="5px"
              borderRadius="4px"
              p={[1]}
              fontSize={[1, 3]}
              color='white'
              bg="danger"
              hoverColor="#d12133"
              onClick={() => handleDelete(song.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SongList;
