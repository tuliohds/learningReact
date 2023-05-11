import React, { Component } from 'react';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
        feed: [
            {id: 1, username: 'Tulio', curtidas: 150, comentarios: 85},
            {id: 1, username: 'Fernanda', curtidas: 308, comentarios: 11},
            {id: 1, username: 'Stella', curtidas: 250, comentarios: 110},
        ]
    };
  }

  render(){
    return(
      <div>
        <h1>Feed</h1>
        <p>Practicing about list</p>
        {this.state.feed.map((item) => {
         return (
            <div key={item.id}>
                <h3>{item.username}</h3>
                <p>{item.curtidas} curtidas / {item.comentarios} comentarios</p>
            </div>
         );   
        })}
      </div>
    );
  }
}

export default Feed;
