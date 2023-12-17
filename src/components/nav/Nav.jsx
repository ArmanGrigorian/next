import Link from "next/link";
import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
