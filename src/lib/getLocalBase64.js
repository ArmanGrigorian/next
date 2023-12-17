import { getPlaiceholder } from "plaiceholder";

// one image
export async function getBase64(imageURL) {
	try {
		const response = await fetch(imageURL);

		if (!response.ok) {
			throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
		}

		const buffer = await response.arrayBuffer();

		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		return base64;
	} catch (err) {
		console.log(err);
	}
}

// all images
export async function addBlurredDataUrls(pictures) {
	const base64Promises = pictures.map((picture) => getBase64(picture.urls.full));
	const base64Results = await Promise.all(base64Promises);

	const picturesWithBlur = pictures.map((picture, idx) => {
		picture.blur_hash = base64Results[idx];
		return picture;
	});

	return picturesWithBlur;
}
