import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <TopBar />
    </div>
  );
}

export default App;
