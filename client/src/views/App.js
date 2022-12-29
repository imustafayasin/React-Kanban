import '../assets/App.css';
import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar.js"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
      </div>
    </div>
  );
}

export default App;
