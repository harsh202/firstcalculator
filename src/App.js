import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  NoButton from './nobutton';
import Screen from './screen';



class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      i:0,
      val:0,
      output:0,
      array1:(Array(15).fill(null)),
      array2:(Array(14).fill(null)),
      screenInput:0,
      calOutput:0,
      nextopp:true,
    }
  }
  async handleClick(value){
    console.log('AAAA', value);
    const history = this.state.array1.slice();
    const history2 = this.state.array2.slice();
    let i = this.state.i;
    if((value === '*' || value === '+' ||value === '/' || value === '-')&&(this.state.nextopp===true)){
      this.setState({nextopp:false});
      console.log("firstcondition1")
      history2[i] = value;
      await this.setState({array2:history2})
      i++;
      await this.setState({i:i})
    }
    else if(!(value === '*' || value === '+' ||value === '/' || value === '-')){
      this.setState({nextopp:true});
      console.log("firstcondition2")
      history[i] = Number(history[i])*10 + value;
      await this.setState({array1:history})
    }
    var screenInput = 0;
    var calOutput = 0;
    if((this.state.array1[0])===null){
        console.log("secondcondition1")
        screenInput=this.state.array1[0];
        let history3= this.state.array1.slice();
        history3[0]=0;
        this.setState({array1:history3});
    }
    else{
        if(value!== "="){
          console.log("secondcondition2")
            for(let i=0; i<15; i++){
                if((this.state.array1[i])!== null){
                    screenInput = screenInput+(this.state.array1[i]);
                    this.setState({screenInput:screenInput});
                    console.log("a-->" +this.state.screenInput)
                    calOutput=eval(screenInput);
                    this.setState({calOutput:calOutput
                    })
                    console.log(calOutput);
                    console.log(screenInput);
                    console.log("current output-->"+eval(screenInput));
                    if((this.state.array2[i])!= null){
                        screenInput=screenInput+(this.state.array2[i]);
                        this.setState({screenInput:screenInput});
                    }
                }
            }
            this.setState({a:screenInput});
        }
      }
    console.log(this.state.array1);
    console.log(this.state.array2);
      this.setState({val:value});
      console.log("value" + this.state.val);
    
  }
  a_output(run){
    console.log("component will mount");
    let arr1=Array(15).fill(null);
    let arr2=Array(14).fill(null);

        if( run=== "=" ){
          arr1[0]=this.state.calOutput;
          this.setState({
            array1:arr1,
            array2:arr2,
        })
        console.log("a-->" +this.state.screenInput)
        this.setState({i:0,screenInput:(this.state.calOutput)});
    }
  }
  handleClear(clean){
    console.log("component will mount");
    let arr1=Array(15).fill(null);
    let arr2=Array(14).fill(null);

        if( clean=== "c" ){
          this.setState({
            array1:arr1,
            array2:arr2,
        })
        console.log("a-->" +this.state.screenInput)
        this.setState({i:0,screenInput:0});
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Calculator
        </p>
        <div className="grid2">
        <div className = "grid-item2">
            <Screen value1 = {this.state.array1} value2 = {this.state.array2} val={this.state.val} output ={this.state.screenInput}/>
        </div>
        <div className="grid-container">
            <NoButton className = "grid-item" value ={1} onClick={(i) => (this.handleClick(i))}/>
            <NoButton className = "grid-item" value ={2} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={3} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={"*"} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={4} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={5} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={6} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={"/"} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={7} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={8} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={9} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={"+"} onClick={(i) => this.handleClick(i)}/>
            <NoButton className = "grid-item" value ={0} onClick={(i) => this.handleClick(i)}/> 
            <NoButton className = "grid-item" value ={"="} onClick={(i) => this.a_output(i)}/>
            <NoButton className = "grid-item" value ={"c"} onClick={(i) => this.handleClear(i)}/>
            <NoButton className = "grid-item" value ={"-"} onClick={(i) => this.handleClick(i)}/>
            
        </div>
        </div>
      </div>
    );
  }
}


export default App;
