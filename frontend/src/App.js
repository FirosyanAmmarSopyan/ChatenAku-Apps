import { Routes, Route } from "react-router-dom";
import "./App.css"
import HomeView from "./Pages/HomeView";
import ChatView from "./Pages/ChatView";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomeView />} />
     <Route path="/chats" element={<ChatView />}/>
     </Routes>

    </div>
  );
}

export default App;
