import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  
  return (
  <ChatEngine 
    height="100vh"
    projectID="e489f4b2-e841-496e-9df0-27a37a1d1e2e"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
