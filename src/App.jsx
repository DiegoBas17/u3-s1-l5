import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import Home from "./component/Home";
import MyFooter from "./component/MyFooter";
import ProfilePage from "./component/ProfilePage";
import SettingPage from "./component/SettingPage";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <TopBar />
      {/* <ProfilePage /> */}
      {/* <SettingPage /> */}
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
