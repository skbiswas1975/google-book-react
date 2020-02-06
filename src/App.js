import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

    

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      keyword: '',
      result: []
  };
  }

  
  myChangeHandler = (event) => {
    this.setState({keyword: event.target.value});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.keyword);
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.state.keyword)
    .then(data => {
      console.log(data.data.items);
      this.setState({ result: data.data.items })
      console.log(this.state.result);
    })
  }

  render() {
    

  return (
    <div className="App">
      <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#search">Search Books</a></li>
        <li><a href="#saved">Saved Books</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron text-left">
  <h2>Google Book Search using React</h2>
   
  <form onSubmit={this.mySubmitHandler}>
    <div class="form-group">
      <input type="text" onChange={this.myChangeHandler} class="form-control" size="50" placeholder="Search for books" autoComplete="off" />
      </div>
        <button type="submit" class="btn btn-danger">Submit</button>
  </form>
  {this.state.result.map(keyword => (
    <a href={keyword.volumeInfo.previewLink} target="_blank">
    <img src={keyword.volumeInfo.imageLinks.thumbnail} />
    </a>
  ))}
</div>



<footer class="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Copyright</p>
</footer>



    </div>
  );
}
}

export default BookSearch;
