import "../index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <nav id="nav">
                <h1 id="websiteName">My Portfolio</h1>

                <div id="nav-Items">
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About me</Link> |{" "}
                    <Link to="/Projects">Projects</Link> |{" "}
                    <Link to="/contact">Contact</Link> |{" "}
                </div>

                <div id="nav-movel">
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About me</Link> |{" "}
                    <Link to="/Projects">Projects</Link> |{" "}
                    <Link to="/contact">Contact</Link> |{" "}
                </div>

            </nav>
        </header>
    );
}