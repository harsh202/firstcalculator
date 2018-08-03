import React, { Component } from 'react';

class NoButton extends Component{
    constructor(props){
        super(props);
        this.state={ 
            val:null
        }
    }

    render(){
        return(
            <div>
                <button className={this.props.className} value = {this.props.value} onClick={() => (this.props.onClick(this.props.value))}>
                    {this.props.value}
                </button>
            </div>

        );
    }
}
export default NoButton;