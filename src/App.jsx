import { GlobalStyle } from './styles/global';

import { Header } from './components/Header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
   <div>
    <Header />
    <Dashboard />
    <GlobalStyle/>
   </div>
  );
}

export default App;
