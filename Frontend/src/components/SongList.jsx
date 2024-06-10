// src/components/SongList.jsx
import React from 'react';
import { Container, Heading ,Form, Input, Button, List, ListItem,ListItemText} from './SongStyle';

const SongList = () => {
  return (
   <Container 
   p={[3, 4]}
   maxWidth="600px"
   bg="aliceblue"
   borderRadius="8px"
   boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
   margin="40px auto"
   >
    <Heading
    fontSize={[4,5]}
    color='black'>
      Song lists
    </Heading>
    <Form>
        <Input
          p={[1]} border="1px solid" borderRadius="4px"
          borderColor="secondary"  fontSize={[1,3]}
          placeholder="song title"> 
        </Input>
        <Input
          p={[1]} border="1px solid" borderRadius="4px"
          borderColor="secondary"  fontSize={[1,3]}
          placeholder="Artist"> 
        </Input>
        <Button
        p={[1]} borderRadius="4px"
        bg="secondary"
        color='white' fontSize={[1,3]}
        hoverColor="#9153d3">Add Song</Button>
    </Form>
    <List>
    <ListItem>
        <ListItemText>
          song-title ..... song-artist
        </ListItemText>
        <Button
              marginRight="5px"
              borderRadius="4px"
              p={[1]}
              fontSize={[1,3]}
              color='white'
              bg="success"
              hoverColor= "yellowgreen"
              >edit
        </Button>
        <Button
            marginRight="5px"
            borderRadius="4px"
            p={[1]}
            fontSize={[1,3]}
            color='white'
            bg="danger"
            hoverColor="#d12133"
            >delete
        </Button>
      </ListItem>
    </List>
   </Container>
  );
};

export default SongList;
