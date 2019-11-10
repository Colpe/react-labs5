import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namePlayer1: "Player1",
            namePlayer2: "Player2",
            activePlayerName: "Player1",
            playerOneNumberOfTimes: 1,
            playerTwoNumberOfTimes: 0
        }
    }

    changePlayer1Name = (e) => {
        this.setState({
            //  playerOneNumberOfTimes: prev.playerOneNumberOfTimes + 1,
            namePlayer1: e.target.value
        })
    }

    changePlayer2Name = (e) => {

        this.setState((prev, props) => {
            return { playerTwoNumberOfTimes: prev.playerTwoNumberOfTimes + 1 }
        });
        this.setState({
            namePlayer2: e.target.value
        })
    }
    changeActivePlayer = (name) => {
        if (name == this.state.namePlayer1)
            this.setState((prev, props) => {
                return { playerOneNumberOfTimes: prev.playerOneNumberOfTimes + 1 }
            });
        else
            this.setState((prev, props) => {
                return { playerTwoNumberOfTimes: prev.playerTwoNumberOfTimes + 1 }
            });


        this.setState({
            activePlayerName: name
        });
    }

    render() {
        console.log(this.state.playerOneNumberOfTimes)
        console.log(this.state.playerTwoNumberOfTimes)
        return (
            <div>
                <Player
                    name={this.state.namePlayer1}
                    activePlayer={this.state.activePlayerName}
                    activationHandler={this.changeActivePlayer}
                    playedNumberOfTimes={this.state.playerOneNumberOfTimes}
                />
                <br />
                <Player
                    name={this.state.namePlayer2}
                    activePlayer={this.state.activePlayerName}
                    activationHandler={this.changeActivePlayer}
                    playedNumberOfTimes={this.state.playerTwoNumberOfTimes}

                />
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