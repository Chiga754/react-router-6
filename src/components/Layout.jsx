import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Layout = () => {
    return (
        <div>
            {/* По умолчанию устанавливается класс active */}
            {/* <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header> */}
            
            {/* Для использования кастомного класса делаем так */}
            {/* <header>
                <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
            </header> */}


             {/* Если необходимо использовать style */}
            {/* <header>
                <NavLink to="/" style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Home</NavLink>
                <NavLink to="/blog" style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>Blog</NavLink>
                <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'red' : 'white'})}>About</NavLink>
            </header> */}

            {/* Использование хука useMatch в компоненьте CustomLink, для более тонкой настройки */}
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <Outlet/>

            <footer>
                2022
            </footer>
        </div>
    );
}

export default Layout;