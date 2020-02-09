import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
        {/*
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        */}
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <div class="col-lg-12 bottom-pad">
                                    <div class="row no-gutters">
                                <Row className="SearchResult row" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* col-3 show image of the book */}
                                    <div class="col-md-3">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedbook.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription desc">{savedbook.description}</p>
                                        </Row>
                                        </div>
                                        </div>
                                {/* </Row>*/}
                                <br></br>
                                    {/*
                                    <Row className="buttonDiv "> 
                                    */}
                                    <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank">
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
export default SavedResult