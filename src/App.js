import './App.css';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Home />
      </div>
    </HelmetProvider>
  );
}

export default App;
