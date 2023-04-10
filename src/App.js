import './App.css';
import Documents from './components/common/Documents';
import Holidays from './components/common/Holidays';
import Personal from './components/common/Personal';
import NavbarMaster from './components/header/NavbarMaster';
import Signin from './components/common/Signin';
import Workshops from './components/common/Workshops';

function App() {
  return (
    <div className="App">
      <Documents />
      <NavbarMaster />
      <Holidays />
      <Personal />
      <Signin />
      <Workshops />
    </div>
  );
}

export default App;
