import { Routes, Route } from "react-router-dom";
import MainView from "./views/mainView";
import AddNewView from "./views/addNewView";
import UpdateView from "./views/editView";
import NavBar from "./components/navbar";
import ErrorMessage from "./components/errorMessage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/new-platform" element={<AddNewView />} />
        <Route path="/update-platform" element={<UpdateView />} />
        <Route path="/error" element={<ErrorMessage />} />
      </Routes>
    </div>
  );
}

export default App;
