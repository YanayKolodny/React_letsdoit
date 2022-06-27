import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <h1> Home Page </h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/students">Students</Link> |{" "}
        <Link to="/books">Books</Link> |{" "}
        <Link to="/mosh">Mosh</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
