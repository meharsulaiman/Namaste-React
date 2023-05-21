import React, { Component } from 'react';

class ProfileClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  render() {
    return (
      <>
        <h1>Class Based Component</h1>
        <h4>{this.props.name}</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo id
          doloremque minus nulla autem culpa ab perferendis alias soluta,
          temporibus amet, voluptate aliquid optio ducimus molestiae nam modi
          impedit magnam sunt quod dolorem similique.
        </p>
      </>
    );
  }
}

export default ProfileClass;
