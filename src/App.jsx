import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

import { Users } from './mock/users';

import { GlobalStyle } from './styles/global';
import themes from './styles/themes/index';

function App() {
  return (
   <ThemeProvider theme={themes.light}>
      <Header />
      <Dashboard initialTasks={Users} />
      <GlobalStyle/>
   </ThemeProvider>
  );
}

export default App;
