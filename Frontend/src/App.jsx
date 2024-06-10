import React from 'react'
import { ThemeProvider } from '@emotion/react'
import SongList from './components/SongList';
const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "red",
    light: "#f8f9fa",
    dark: "#343a40",
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    body: "Arial, sans-serif",
  },
};
// Wrap your application with ThemeProvider and pass your theme object as a prop
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SongList/>
    </ThemeProvider>
  );
};

export default App;