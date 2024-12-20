import { Form } from "react-bootstrap"
import { MovieCard } from "../movie-card/movie-card"

export const MovieFilter = ( movies ) => {

    const [filter, setFilter] = useState("")


    const handleFilterChange()

    return(
        <>
        <Form className="filter-form mb-4">
            <Form.Group controlId="filter">
                <Form.Label>Search:</Form.Label>
                <Form.Control
                    className="formField"
                    type="text"
                    value={filter}
                    onChange={(e) => handleFilterChange()}
                />
            </Form.Group>
        </Form>

            {movies.map((movie) => (
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