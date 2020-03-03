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

    render () { 
        return (
            <button style={style} onClick={() => {
                let locationArray = this.setId(this.props.id)
                // console.log(locationArray)
                if(this.props.game[locationArray[0]][locationArray[1]] === ""){
                    this.setState({value: this.props.move})
                    this.props.changeCashe(this.setId(this.props.id), this.props.move)
                    this.props.changeSymbol()
                    this.props.resetNum()
                    console.log(this.props.game)
                }
            }}>{this.state.value}</button>
        )
    }
}

export default Box