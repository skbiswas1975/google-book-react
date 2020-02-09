import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0) ? (
       
        <div className="card">
         {/*
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results Area</h3>
                </div>
            </div>
         */}
        </div>
        
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h2>Search Results</h2>
                        {props.books.map(book => {
                            return (
                               
                                    <div class="col-lg-12 bottom-pad">
                                    <div class="row no-gutters">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        {/* col-3 show image of the book */}
                                        <div class="col-md-3">
                                            <img src={book.image} alt={book.title} />
                                        </div>
                                        <div class="col-md-9">
                                        <div class="card-body">
                                            <Row>
                                                <h3 className="bookTitle">{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="bookAuthor">{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription desc">{book.description}</p>
                                            </Row>
                                            </div>
                                        </div>
                                   {/* </Row>*/}
                                    <br></br>
                                    {/*
                                    <Row className="buttonDiv "> 
                                    */}
                                        <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button className="viewBook btn btn-success">
                                                View Book
                                        </button>
                                        </a>
                                        
                                    </Row>
                                        
                                    </div>
                                    </div>
                               
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult