import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <nav class="navbar navbar-expand-sm bg-light justify-content-center navbar-dark bg-dark">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <Link class="nav-link " to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/blogs">blogs</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
              
            </ul>
        </nav>
    {/* .................... */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/" className="lead">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;