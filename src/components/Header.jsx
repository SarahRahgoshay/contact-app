import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p>
                <a href="https://github.com/SarahRahgoshay/contact-app"> contact-app </a> | react.js
            </p>
        </div>
    );
};

export default Header;