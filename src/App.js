import React,{Component} from 'react';
import Search from './Search';
import Movies from './Movies';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input : '',
      details : {},
      clicked:false
    }
  }
  gettitle = (event)=>{
    this.setState({input : event.target.value})
  }
  onButtonClick =()=>{
      
      const url = `http://www.omdbapi.com/?apikey=ab399ca6&t=${this.state.input}`;
      fetch(url).then(r=>r.json()).then(d =>this.setState({details : d}));
      if(this.state.details.length!==0){
        this.setState({clicked:true})
      }
  }
  render(){
    return(

      <div className = "f" >
        <Search GetTitle = {this.gettitle} OnButtonClick = {this.onButtonClick} />

        <Movies isclicked = {this.state.clicked} detail = {this.state.details} />
      </div>
    );
  }
}

export default App;
