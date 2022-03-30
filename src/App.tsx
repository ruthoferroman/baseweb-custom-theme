import * as React from "react";
import ThemeProvider from './ThemeProvider';
import Example from './components/Example';

import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  );
}
