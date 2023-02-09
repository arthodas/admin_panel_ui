import './App.css';
import Navbar from './components/Navbar.jsx';
import Homebody from './components/Homebody.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className="App">
      <body>
        <Sidebar />
        <div>
          <Navbar />
          <Homebody />

        </div>
      </body>
    </div>
  );
}

export default App;