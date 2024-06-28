import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import Home from "./component/Home";
import MyFooter from "./component/MyFooter";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <TopBar />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
