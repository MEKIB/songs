import React from 'react'
import { ThemeProvider } from '@emotion/react'
import SongList from './components/SongList';
import {Provider} from 'react-redux'
import store from './redux/store'
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
}
const App = () => {
  return (
    <Provider store={store}>
       <ThemeProvider theme={theme}>
          <SongList/>
       </ThemeProvider>
    </Provider>
    
  );
};

export default App;