import React from "react"

class CheckWin extends React.Component {
    render() {
        if (this.props.winner) {
            return <h1>{this.props.winner} wins!</h1>
        } else {
            return <h1>{this.props.nextMove}'s move</h1>
        }
    }
}

export default CheckWin