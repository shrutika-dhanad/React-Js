import { useState} from "react";

import "./App.css";
import LoggerComp from "./Components/LoggerComp";
import TimerComponent from './Components/TimerComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <LoggerComp />  */}
    <TimerComponent />
    </div>
  );
}

export default App;
