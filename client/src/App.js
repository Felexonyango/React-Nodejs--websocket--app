

import{BrowserRouter as Router ,Route} from 'react-router-dom';
import Join from './components/Join/join';
import chat from './components/Chat/chat'
function App() {
  return (
<Router>
  <Route path="/"exact  component={Join}/>
  <Route path="/chat"component={chat}/>
</Router>
  );
}

export default App;
