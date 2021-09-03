import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Header/Navber';
import Body1 from './Components/Body/Body1/Body1';
import Body2 from './Components/Body/Body2/Body2';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Body1></Body1>
      <Body2></Body2>
    </div>
  );
}

export default App;
