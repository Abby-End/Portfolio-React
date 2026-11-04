import style from '../styles/Navbar.module.css';
import Button from './Button';

function Navbar ({name,href,links,cta}) {
    return(
        <nav className={style.navbar}>
            {/* the Logo*/}
            <a href={href} className={style.logo}>{name}</a>

            {/*links*/}
            <ul className={style.links}>
                {links.map((link) => 
                    (<li key={link.id}>
                        <a href={link.href}>{link.label}</a>
                    </li>)
                )}
            </ul>

            {/* the button*/}
            {cta && <Button {...cta} />}
        </nav>
    );   
}

export default Navbar;