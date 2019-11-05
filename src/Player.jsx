import React from 'react'



 class Player extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div >
                    <label>Name: </label>
                    <label width="100px" >{this.props.name}</label> 
                </div>
            </div>
        );
    }


}
export default Player;