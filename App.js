import React , {Component} from "react";
import Popup from "./Component/Popup";
import './App.css';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup : false,
            text : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePop = this.togglePop.bind(this);
    }
    handleChange(e){
        this.setState({
            text : e.target.value
        });
    }
    togglePop(){
        this.setState({
            showPopup : !this.state.showPopup
        });
    }


    render(){
        return(
            <div className="right">
                <label for = " ">USER NAME</label><br/>
                <input type="text" id="i1" onChange={this.handleChange} value={this.state.text} 
                placeholder="Enter Your Name"></input><br/>
                <button className="button2" onClick={this.togglePop}>Click Me</button>
                {this.state.showPopup?
                <Popup text = "Good Luck" closePopup = {this.togglePop} value = {this.state.text}/>
                : null }
            </div>
        )
    }
}
export default App;
