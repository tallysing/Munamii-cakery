import { Link, useMatch, useResolvedPath } from "react-router-dom";

const logoImgPath="./src/assets/img/Munamii_cakery_logo.png";

export default function Header() {
    return(
        <header>
            <picture className="header_logo">
                <img src={logoImgPath} alt="Munamii_logo" className="logo_img" />
            </picture>

            <nav>
                <menu>
                    
                        <CustomLink to="/">Home</CustomLink>
                    
                    
                        <CustomLink to="/about">About</CustomLink>
                 
                        <CustomLink to="/products">Products</CustomLink>
                    
                        <CustomLink to="/contact">Contact</CustomLink>
                    
                </menu>

            </nav>
        </header>)
}

function CustomLink({to, children, ...props}) {
    var resolvedPath= useResolvedPath(to),
    isActive= useMatch({path: resolvedPath.pathname,
    end: true});

    return (
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props} className="navlinks">
                {children}
            </Link>
        </li>
    )
}