import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PersonForm from "../islands/PersonForm.tsx";
import PersonList from "../islands/PersonList.tsx";
import { Person, handler as getData, addPerson } from "./api/data.ts";

// handler fetching data returning Person array or null
export const handler: Handlers<Person[] | null> = {
	async GET(req, ctx) {
		// query new data from URL parameters and add it to the database
		const url = new URL(req.url);
		if (url.searchParams.toString() !== "") {
			const first = url.searchParams.get("first");
			const last = url.searchParams.get("last");
			const part = parseInt(url.searchParams.get("part")!);

			// there shouldn't be any empty fields
			if (first !== null || last !== null) {
				// TODO: add an empty field warning
				addPerson({first: first!, last: last!, part: part});
			}
		}

		// fetch the API data
		const res = getData(req, ctx);

		if (res.status === 404) {
			return ctx.render(null);
		}

		const fullData: Person[] = await res.json();
		return ctx.render(fullData);
	}
};

// use PageProps arguments to get fetched data
export default function Home({ data }: PageProps<Person[] | null>) {
	if (!data) {
		return (
			<>
				<Head>
					<title>:(</title>
				</Head>

				<div>
					<h3>The data couldn't be fetched :(</h3>
				</div>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>Fullstack Challenge</title>
			</Head>

			<PersonForm />
			
			<PersonList data={data} />
		</>
	);
}
