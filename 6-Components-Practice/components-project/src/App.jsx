import "./App.css";
import Navbar from './Components/Navbar';
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {

  return (
    <div>
     <Navbar /> 
<div className="Cards">
 <Card title="card 1" desc="this is first Card" />
 <Card title="card 2" desc="this is second Card" />
 <Card title="card 3" desc="this is third Card"  />
 <Card title="card 4" desc="this is fourth Card" />

</div>
<Footer />
    </div>
  );
}

export default App;
