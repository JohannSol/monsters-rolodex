import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import { Search } from './components/search.component';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        monsters : [],
        searchField : ''
    }
  }
  componentDidMount() { // returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users}))  
  }
  updateQuery = (e) => {
    this.setState({ 
      searchField : e.target.value,
    })
  }
  render() {
    const { monsters, searchField } = this.state // this is called destructuring. This is the same as
    // const monsters = this.state.monsters etc...
    const newArr = monsters.filter(monster => monster.name.toLowerCase()
                          .includes(searchField.toLowerCase()))
    return (
        <div className="App">
          <h1 className="App-title">Monsters Rolodex</h1>
          <Search handleChange={this.updateQuery} placeholder = "search monsters"/>
          <CardList monsters = {newArr} />
        </div>
      );
    }
}

export default App;
