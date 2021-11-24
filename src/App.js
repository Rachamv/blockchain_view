
import './App.css';
import Block from './components/Block';
import Sha256Hash from './components/Sha256Hash';
import Blockchain from './components/BlockchainBlock';


function App() {
  return (
  <>
   <Sha256Hash/>
   <Block />
   <Blockchain />
  </>
  );
}

export default App;
