// ts enum realization
enum HTTPRequestMethodEnum {
	GET = "GET",
	POST = "POST",
}

// object realization, more used.
const HTTPRequestMethod = {
	GET: "GET",
	POST: "POST",
} as const; // here is a catch for using it in a fetchJSON().
// as const here makes types not as strings, but as readonly specific strings.

type ValuesOf<T> = T[keyof T];
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod> // type for

async function fetchJSON(url: string, method: HTTPRequestMethodType) {
	const response = await fetch(url, {method});
	return response.json();
}

fetchJSON("https://example.com/", HTTPRequestMethod.GET).then(data => {
	//...
});