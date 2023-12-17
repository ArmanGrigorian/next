export async function getPictures() {
	try {
		const ACCESS_KEY = process.env.ACCESS_KEY;
		const response = await fetch("https://api.unsplash.com/photos/?client_id=" + ACCESS_KEY);
		const pictures = await response.json();
		return pictures;
	} catch (err) {
		console.error(err);
		return [];
	}
}
