import './App.css'
import ColorBoxGrid from './ColorBoxGrid'

const colors = ['red', 'green', 'blue', 'teal', 'magenta', 'purple', 'pink', 'yellow', 'orange', 'brown', 'black', 'white'];

function App() {
  return (
  <div>
      <ColorBoxGrid colors={colors}/>
  </div>
  );
};

export default App;
