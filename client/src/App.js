import NewNav from "./components/heder/NavBar";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <div className="app_main">
        <Sidebar />
        <div style={{width:"100%", backgroundColor:"#EEEEEE"}}>
          <NewNav />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
