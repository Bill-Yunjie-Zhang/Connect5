import React from "react"

class CheckWin extends React.Component {
    render() {
        if (this.props.winner) {
            return <h1 style={{color: "red", textAlign: "center"}}>{this.props.winner} wins!</h1>
        } else {
            return <h1 style={{textAlign: "center"}}>Next Move: {this.props.nextMove}</h1>
        }
    }
}

export default CheckWin