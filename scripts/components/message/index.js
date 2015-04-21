import React from 'react';
import FluxComponent from 'flummox/component';
import connectToStores from 'flummox/connect';

class MessagesView extends React.Component {

  render() {
    return (
      <div>{this.props.messages.map((message) => message.content).join(' ')}</div>
    );
  }

}

MessagesView = connectToStores(MessagesView, {
  messages: store => ({
    messages: store.state.messages
  })
});

export default MessagesView;
