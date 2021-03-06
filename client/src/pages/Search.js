import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };

    // componentDidMount() {
    //   this.loadBooks();
    // }

    // loadBooks = () => {
    //   API.getBooks()
    //     .then(res =>
    //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //     )
    //     .catch(err => console.log(err));
    // };

    // deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }

    // handleInputChange = event => {
    //   const { name, value } = event.target;
    //   this.setState({
    //     [name]: value
    //   });
    // };

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       // Reload DOM after submit
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };

    render() {
        return (
            <Container fluid>
                <Row>
                    {/* <Col size="md-6"> */}
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h2>Search for and Save Books of Interest</h2>
                        </Jumbotron>
                        <form>
                            <Input
                                name="title"
                                placeholder="Title (required)"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                            <Input
                                name="author"
                                placeholder="Author (required)"
                                value={this.state.author}
                                onChange={this.handleInputChange}
                            />
                            <TextArea
                                name="synopsis"
                                placeholder="Synopsis (Optional)"
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                            />
                            <FormBtn
                                disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >Submit Book</FormBtn>
                        </form>
                    {/* </Col> */}
                    {/* <Col size="md-6 sm-12"> */}
                        {/* <Jumbotron>
                            <h1>Books On My List</h1>
                        </Jumbotron> */}
                        {/* {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => {
                                    return (
                                        <ListItem key={book._id}>
                                            <a href={"/books/" + book._id}>
                                                <strong>
                                                    {book.title} by {book.author}
                                                </strong>
                                            </a>
                                            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )} */}
                    {/* </Col> */}
                </Row>
            </Container>
        );
    }
}

// export default Books;

// const Search = () =>
//     <div>
//         <Jumbotron>
//             <h1>(React) Google Books Search</h1>
//             <h2>Search for and Save Books of Interest</h2>
//         </Jumbotron>
//     </div>

export default Search;
