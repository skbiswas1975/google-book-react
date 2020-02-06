import React, { Component } from 'react';
import './App.css';

class BookSearch extends Component {
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
        <li><a href="#about">Search Books</a></li>
        <li><a href="#services">Saved Books</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron text-left">
  <h2>Google Book Search using React</h2> 
   
  <form>
    <div class="form-group">
      <input type="text" class="form-control" size="50" placeholder="Search for books" autoComplete="off" />
      </div>
        <button type="submit" class="btn btn-danger">Submit</button>
  </form>
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
