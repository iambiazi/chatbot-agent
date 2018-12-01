import React from 'react';
import _JSXStyle from 'styled-jsx/style'

const MessageInput = () => (
  <div id='messageinput-container'>
    <input id='message-input' type='text' placeholder='Send a message here' />
    <style jsx>{`
      #messageinput-container, #message-input {
        height: 2em;
        width: 20em;
        margin: auto;
        font-size: 1em;
      }
      #message-input {
        border: solid black 1px;
      }
    `}</style>
  </div>
);

export default MessageInput;
