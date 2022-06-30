import logo from './logo.svg';
import './App.css';
import NavigationBar from "./component/NavigationBar"
import Intro from './component/Intro';
import Tranding from './component/Tranding';
import Superhero from './component/Superhero';
import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/*intro selection */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro   */}

      <div className='tranding'>
        <Tranding />
      </div>

      <div className='superhero'>
        <Superhero />
      </div>
    </div>
  );
}

export default App;
