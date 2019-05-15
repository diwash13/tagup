import React, { Component } from 'react';

class NewLog extends Component {
    constructor() {
        super()
        this.state = {
            logs: [],
            title: '',
            message: ''
        }
    }
    handleChangeTitle = (val) => {
        console.log(val)
        this.setState({
          title: val
        })
      }

      handleChangeMessage = (val) => {
        console.log(val)
        this.setState({
          message: val
        })
      }

    render() {
        return (
            <div>
                <h3>Add New Log</h3>
                <input type="text" placeholder='Log Title' onChange={e => this.handleChangeTitle(e.target.value)}
        value={this.state.title}/>
                <br/>
                <textarea name="Log Message" placeholder='Log Message' cols="30" rows="10" 
                onChange={e => this.handleChangeMessage(e.target.value)}
                value={this.state.message}
                ></textarea>
                <br/>
                <button>Submit Log</button>
            </div>
        )
    }
}

export default NewLog