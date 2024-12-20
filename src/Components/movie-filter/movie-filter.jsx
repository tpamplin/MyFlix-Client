import React , {useState} from "react"
import { Col, Button, Form } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { MovieCard } from "../movie-card/movie-card"

export const MovieFilter = ( movies ) => {

    const [filter, setFilter] = useState("");

    const filteredMovies = filter? movies.movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(filter.toLowerCase());
    }) : (movies.movies);

    return(
        <>
        <Form className="filter-form mb-4">
            <Form.Group controlId="filter">
                <Form.Control
                    className="formField"
                    placeholder="Search:"
                    type="text"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }}
                />
            </Form.Group>
        </Form>

            {filteredMovies.map((movie) => (
                <Col
                    className="mb-4" 
                    key={movie.Id} 
                    md={3}
                >
                    <MovieCard movie={movie}/> 
                </Col>
            ))}
            <Col md={8} className="centeredContent"> 
                <Button className="addSpacing" onClick={() => onLoggedOut()}>Logout</Button>
            </Col>
        </>

    )

}