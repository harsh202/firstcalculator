import React, { Component } from 'react';

class Screen extends Component{
    constructor(props){
        super(props);
        this.state={
            val1:0,
            array1:this.props.value1,
            array2:this.props.value2,
            b:0,
            a:0
        }
    }
    screenoutput = (b) =>{
        if( (this.props.val) === "=" ){
           let c= Array(15).fill(null);
           c[0]=b;
           this.props.screencal(c,Array(14).fill(null));
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("FullFeaturedTable :: Recieved props", nextProps)
        if (nextProps) {
            if (this.props!== nextProps){
                this.setState({
                    array1: nextProps.value1,
                    array2: nextProps.value2,
                })
            }
        }
    }

    render(){
        console.log(this.state.array1);
        console.log(this.state.array2);
        return(
            <div className="setting" >
                <p className="setting">
                   {this.props.output}
                </p>
            </div>
        );
    }

}
export default Screen;
