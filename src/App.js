import "./App.css";
import Chat from "./layouts/content/chat";
import MainLayout from "./layouts/main-layout";
import Sidebar from "./layouts/sidebar/sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <MainLayout />
      </div>
    </div>
  );
}

export default App;
