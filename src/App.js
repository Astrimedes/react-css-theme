import React, { useState } from 'react';
import { ThemeProvider }  from 'styled-components';
import { lightTheme, darkTheme } from './themes/standard-themes';
import { GlobalStyles } from './themes/global-styles';


function App() {
  // hook for theme state, set to light initially
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  // themes can change at render time
  const styles = theme === 'light' ? lightTheme : darkTheme;

  // wrap entire app in themeprovider to provide prop.theme access to all nested components
  // GlobalStyles uses values in theme and attaches global css styles to the dom to "translate" theme into css styles
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>The theme is {theme}</h1>
    </ThemeProvider>
  );
}

export default App;
