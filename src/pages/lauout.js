import { Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/error">ErrorPage</Link>
          </li>
          <li>
            <Link to="/request">Request</Link>
          </li>
          <li>
            <Link to="/mdap">Mdap</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default HomePage;
