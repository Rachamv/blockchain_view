
import './App.css';
import Block from './components/Block';
import Sha256Hash from './components/Sha256Hash';
import BlockchainBlock from './components/BlockchainBlock';
import Chainblock from './components/Chainblock';


function App() {
  return (
  <>
   <Sha256Hash/>
   <Block />
   <Chainblock />
   <BlockchainBlock/>
  </>
  );
}

export default App;
