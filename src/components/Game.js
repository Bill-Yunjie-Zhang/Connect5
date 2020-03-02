import React from 'react'
import Box from './Box'

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
    createBox = () => {
        num += 1
        return <Box id={num}></Box>
    }    
    
    createBoxes = () => {
        return arr1.map(this.createBox)
    }

    render() {
        return (
            <div>
                <div style={style} id="board">
                    {this.createBoxes()}
                </div>
            </div>
        )
    }
}

export default Game