import Image from "next/image";
import styles from "./Picture.module.scss";
// import { getBase64 } from "../../lib/getLocalBase64";

const Picture = async ({ picture }) => {
	const { urls, width, height, alt_description, blur_hash } = picture;

	// const myBlurDataUrl = await getBase64(urls.full);

	return (
		<Image
			className={styles.Picture}
			src={urls.full}
			width={width}
			height={height}
			alt={alt_description}
			blurDataURL={blur_hash}
			// blurDataURL={myBlurDataUrl}
			placeholder="blur" 
		/>
	);
};

export default Picture;
