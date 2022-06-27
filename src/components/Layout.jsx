import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </header>

            <Outlet/>

            <footer>
                2022
            </footer>
        </div>
    );
}

export default Layout;