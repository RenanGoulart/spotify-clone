import { ThemeProvider } from 'styled-components';
import { theme } from '@global/theme';
import { StatusBar } from 'expo-status-bar';
import { Routes } from '@routes/router';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="light" />
    </ThemeProvider>
  );
};

export default App;
