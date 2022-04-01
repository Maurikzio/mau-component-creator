import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, ThemeProvider, } from "@emotion/react";
import theme from "./theme/main";
import styles from "./styles/global.styles";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Global styles={styles}/>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);

