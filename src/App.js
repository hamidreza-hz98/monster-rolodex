import React, { Component } from "react";
import CardList from './Components/CardList/CardList'
import './App.css'
import SearchBox from "./Components/SearchBox/SreachBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  changeHandler(e){
    
  }

  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={'search monsters'} change={(e)=>this.setState({searchField:e.target.value})} />
        <CardList className="App" monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
