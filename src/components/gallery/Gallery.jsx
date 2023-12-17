import Picture from "../picture/Picture";
import styles from "./Gallery.module.scss";
import { getPictures } from "@/api/pictures";
import { addBlurredDataUrls } from "@/lib/getLocalBase64";

const Gallery = async () => {
	const allPictures = await getPictures();
	const pictures = await addBlurredDataUrls(allPictures);

	return (
		<div className={styles.Gallery}>
			{pictures.map((picture) => (
				<Picture key={picture.id} picture={picture} />
			))}
		</div>
	);
};

export default Gallery;
