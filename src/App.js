
import './App.css';
import FullName  from './Component/profile/FullName';
import Address from './Component/profile/Address';
import Photo from './Component/profile/Photo';

function App() {
  return (
    <div className="App">
      <Photo></Photo>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
