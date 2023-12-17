import Nav from "../nav/Nav";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.Header}>
			<Nav />
		</header>
	);
};

export default Header;
