import React, { Component } from 'react';
import Card from '../Card/Card'

class LogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            message: ''
        }
    }

    addLog = (e) => {
        e.preventDefault()
        this.props.addLog({
            ...this.state,
            timestamp: new Date().toISOString()
        })
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
            <Card> 
                <h3>Add New Log</h3>
                <form onSubmit={this.addLog}>
                <input 
                    type="text" 
                    placeholder='Log Title' 
                    onChange={e => this.handleChangeTitle(e.target.value)}
                    value={this.state.title}/>
                <br/>
                <textarea name="Log Message" placeholder='Log Message' cols="30" rows="10" 
                onChange={e => this.handleChangeMessage(e.target.value)}
                value={this.state.message}
                ></textarea>
                <br/>
                <button type='submit'>Submit Log</button>
                </form>
            </Card>
        )
    }
}

export default LogForm
