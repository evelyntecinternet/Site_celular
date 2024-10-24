import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/music">Music</Link> </li>
            <li> <Link to="/students">Students</Link> </li>
            <li> <Link to="/students/cadastre.js">Students Cadastre</Link> </li>
            <li> <Link to="/col">Col</Link> </li>
            <li> <Link to="/courses">Courses</Link> </li>
            <li> <Link to="/user/form.js">User Form</Link> </li>
            <li> <Link to="/books/form.js">Books Form</Link> </li>
            </ul>
        </nav>
    )
}