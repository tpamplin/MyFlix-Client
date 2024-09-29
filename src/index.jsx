import { createRoot } from "react-dom/client";
import { MainView } from "./Components/main-view/main-view";
import Container from "react-bootstrap/container"

import "bootstrap/dist/css/bootstrap.min.css"

import "./index.scss";

const MyFlixApplication= () => {
    return (
        <Container style={{border: "2px solid navy"}}>
            <MainView/>
        </Container>
    )
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);