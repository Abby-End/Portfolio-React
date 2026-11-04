import styles from '../styles/Button.module.css';
function  Button({text,href,variant="primary",icon}) {
    return(
        <a className={variant=== "primary" ? styles.primary : styles.secondary}>
           {icon && <span>{icon}</span>}
           {text}
        </a>
    );
}

export default Button;