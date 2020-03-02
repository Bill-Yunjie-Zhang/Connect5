import React from "react"

const style = {
    height: 30,
    width: 30,
    fontSize: 10,
    verticalAlign: "top"
}

class Box extends React.Component{
    setId = (num) => {
        let arr = [0, 0]
        if(num>=15){
            arr = [Math.floor(num/15), num%15]
        }
        return arr[0] + "-" + arr[1]
    }

    render () { 
        return (
            <button id={this.setId(this.props.id)} style={style}></button>
        )
    }
}

export default Box