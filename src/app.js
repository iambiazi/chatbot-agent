import React from 'react';
import NavBar from './components/NavBar';
import Chat from './components/Chat';
import MessageInput from './components/MessageInput'
import _JSXStyle from 'styled-jsx/style'


const App = () => (
  <div id='messenger-container'>
    <NavBar />
    <Chat/>
    <MessageInput />
    <style jsx>{`
      #messenger-container {
        height: 36em;
        width: 22em;
        border: solid black;
      }
    `}</style>
  </div>
);

export default App;
