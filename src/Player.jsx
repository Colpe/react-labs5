import React from 'react'



class Player extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.activePlayer);
        console.log(this.props.name);
        return (
            <div>
                <div >
                    <label>Name: </label>
                    <div >
                        <label width="100px" >{this.props.name}     </label>
                        {
                            this.props.activePlayer === this.props.name ?
                            <button disabled>This user is playing now</button> :
                            <button onClick={()=>this.props.activationHandler(this.props.name)}>Play</button>
                        }
                    </div>
                    <label>Played number of times: </label>
                    <label>{this.props.playedNumberOfTimes}</label>
                </div>
            </div>
        );
    }


}
export default Player;