import React from 'react'
import Box from './Box'
import CheckWin from './CheckWin'

const style = {
    height: 450,
    width: 450,
    border: "2px solid #333333"
}

let arr1 = []
for (let ii = 0; ii < 225; ii++){
    arr1.push(ii)
}

let num = -1

class Game extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nextMove: "X",
            squareTaken: [["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]],
            winner: ""
        }
    }

    handleWin = (txt) => {
        this.setState({winner: txt})
    }

    changeSymbol = () => {
        if (this.state.nextMove === "X"){
            this.setState({nextMove: "O"})
        } else {
            this.setState({nextMove: "X"})
        }
    }

    changeCashe = (arr, symbol) => {
        let squareTaken1 = this.state.squareTaken
        squareTaken1[arr[0]][arr[1]] = symbol
        // this.setState({squareTaken: squareTaken1})
    }

    createBox = () => {
        num += 1
        return <Box id={num} resetNum = {this.resetNum} changeCashe={this.changeCashe} move={this.state.nextMove} game={this.state.squareTaken} changeSymbol={this.changeSymbol} handleWin={this.handleWin} winner={this.state.winner}></Box>
    }    

    resetNum = () => {
        num = -1
    }

    createBoxes = () => {
        return arr1.map(this.createBox)
    }

    refresh = () => {
        window.location.reload(false)
    }

    render() {
        return (
            <div style={{width: "454px", margin: "auto"}}>
                <h1 style={{textAlign: "center"}}>Connect 5</h1>
                <div style={style} id="board">
                    {this.createBoxes()}
                </div>
                <CheckWin winner = {this.state.winner} nextMove={this.state.nextMove}></CheckWin>
                <button onClick={this.refresh} style={{textAlign: "center", width: "454px", height: "60px", fontSize: "30px", border: "0px", backgroundColor: "#1865f2", color: "#ffffff"}}>Restart</button>
            </div>
        )
    }
}

export default Game