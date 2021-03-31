import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {

  
  return (
  <ChatEngine 
    height="100vh"
    projectID="e489f4b2-e841-496e-9df0-27a37a1d1e2e"
    userName="matomi"
    userSecret="matomi"
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
