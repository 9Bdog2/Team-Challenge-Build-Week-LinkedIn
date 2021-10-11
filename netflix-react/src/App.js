import "./App.css";

import Activity from "./components/Activity";
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceLI from "./components/ExperienceLI";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Activity />
      <ExperienceLI />
      <Skills />
    </div>
  );
}

export default App;
