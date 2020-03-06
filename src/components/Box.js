import React from "react"

const style = {
    height: 30,
    width: 30,
    fontSize: 20,
    verticalAlign: "top"
}

class Box extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    setId = (num) => {
        let arr = [0, 0]
        arr = [Math.floor(num/15), num%15]
        return arr
    }
    
    checkHorizontal = (gameBoard, lastMove, lastMoveLocation) => {
        let count = 1

        for(let ii = 1; ii < 15 - lastMoveLocation[1]; ii++){
            if(gameBoard[lastMoveLocation[0]][lastMoveLocation[1] + ii] === lastMove){
                count ++
            } else {
                break
            }
        }

        for(let jj = -1; jj > -1 - lastMoveLocation[1]; jj--){
            if(gameBoard[lastMoveLocation[0]][lastMoveLocation[1] + jj] === lastMove){
                count ++
            } else {
                break
            }
        }

        if(count === 5){
            return true
        }

        return false
    }

    checkVertical = (gameBoard, lastMove, lastMoveLocation) => {
        let count = 1

        for(let ii = 1; ii < 15 - lastMoveLocation[0]; ii++){
            if(gameBoard[lastMoveLocation[0] + ii][lastMoveLocation[1]] === lastMove){
                count ++
            } else {
                break
            }
        }

        for(let jj = -1; jj > -1 - lastMoveLocation[0]; jj--){
            if(gameBoard[lastMoveLocation[0] + jj][lastMoveLocation[1]] === lastMove){
                count ++
            } else {
                break
            }
        }

        if(count === 5){
            return true
        }

        return false
    }

    checkNegative = (gameBoard, lastMove, lastMoveLocation) => {
        let count = 1
        let topRange = 0
        let bottomRange = 0

        if(15 - lastMoveLocation[0] > 15 - lastMoveLocation[1]){
            topRange = 15 - lastMoveLocation[1]
        }else{
            topRange = 15 - lastMoveLocation[0]
        }

        if(-1 - lastMoveLocation[0] > -1 - lastMoveLocation[1]){
            bottomRange = -1 - lastMoveLocation[0] 
        }else{
            bottomRange = -1 - lastMoveLocation[1] 
        }

        for(let ii = 1; ii < topRange; ii++){
            if(gameBoard[lastMoveLocation[0] + ii][lastMoveLocation[1] + ii] === lastMove){
                count ++
            } else {
                break
            }
        }

        for(let jj = -1; jj > bottomRange; jj--){
            if(gameBoard[lastMoveLocation[0] + jj][lastMoveLocation[1] + jj] === lastMove){
                count ++
            } else {
                break
            }
        }

        if(count === 5){
            return true
        }

        return false
    }

    checkPositive = (gameBoard, lastMove, lastMoveLocation) => {
        let count = 1
        let topRange = 0
        let bottomRange = 0

        if(lastMoveLocation[0] > 14 - lastMoveLocation[1]){
            topRange = 14 - lastMoveLocation[1]
        } else {
            topRange = lastMoveLocation[0]
        }

        if(lastMoveLocation[1] > 14 - lastMoveLocation[0]){
            bottomRange = 14 - lastMoveLocation[0]
        } else {
            bottomRange = lastMoveLocation[1]
        }

        for(let ii = 1; ii <= topRange; ii ++){
            if(gameBoard[lastMoveLocation[0] - ii][lastMoveLocation[1] + ii] === lastMove){
                count ++
            }else {
                break
            }
        }

        for(let jj = 1; jj <= bottomRange; jj ++){
            if(gameBoard[lastMoveLocation[0] + jj][lastMoveLocation[1] - jj] === lastMove){
                count ++
            }else {
                break
            }
        }

        if(count === 5){
            return true
        }

        return false
    }

    checkWinner = () => {
        let gameBoard = this.props.game
        let lastMove = this.props.move
        let lastMoveLocation = this.setId(this.props.id)
        
        let horizontal = this.checkHorizontal(gameBoard, lastMove, lastMoveLocation)
        let vertical = this.checkVertical(gameBoard, lastMove, lastMoveLocation)
        let negative = this.checkNegative(gameBoard, lastMove, lastMoveLocation)
        let positve = this.checkPositive(gameBoard, lastMove, lastMoveLocation)

        if(horizontal || vertical || negative || positve){
            return lastMove
        }else {
            return ""
        }
    }

    render () { 
        return (
            <button style={style} onClick={() => {
                let locationArray = this.setId(this.props.id)
                if(this.props.game[locationArray[0]][locationArray[1]] === "" && (!this.props.winner)){
                    this.props.handleWin(this.checkWinner())
                    this.setState({value: this.props.move})
                    this.props.changeCashe(this.setId(this.props.id), this.props.move)
                    this.props.changeSymbol()
                    this.props.resetNum()
                }
            }}>{this.state.value}</button>
        )
    }
}

export default Box