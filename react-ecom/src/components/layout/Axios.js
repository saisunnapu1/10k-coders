import React from 'react';
import axios from 'axios';

export default class Axios extends React.Component {
  // constructor()
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value)
    console.log(this.state.name)
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='m-5'>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Mobile
            <input type="text" name="mobile" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
// export default Axios;
