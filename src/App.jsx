import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

import { GlobalStyle } from './styles/global';
import themes from './styles/themes/index';

function App() {
  return (
   <ThemeProvider theme={themes.dark}>
      <Header />
      <Dashboard />
      <GlobalStyle/>
   </ThemeProvider>
  );
}

export default App;
