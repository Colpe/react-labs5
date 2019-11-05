import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namePlayer1: "Player1",
            namePlayer2: "Player2"
        }
    }

    changePlayer1Name = (e)=>{
        this.setState({
            namePlayer1: e.target.value
        })
    }

    changePlayer2Name = (e)=>{
        this.setState({
            namePlayer2: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Player name={this.state.namePlayer1} />
                <br />
                <Player name={this.state.namePlayer2} />
                <br />
                <div>
                    <label>Set name for {this.state.namePlayer1} </label>
                    <input width="100px" value={this.state.namePlayer1} onChange={this.changePlayer1Name} />
                </div>
                <br />
                <div>
                    <label>Set name for {this.state.namePlayer2} </label>
                    <input width="100px" value={this.state.namePlayer2} onChange={this.changePlayer2Name} />
                </div>

            </div>);
    }
}
export default GameAdmin;