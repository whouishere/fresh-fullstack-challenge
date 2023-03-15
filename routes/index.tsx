import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { JSX } from "preact";
import { PersonInfo } from "../components/PersonInfo.tsx";
import { Person, handler as getData } from "./api/data.ts";

// handler fetching data returning Person array or null
export const handler: Handlers<Person[] | null> = {
	async GET(req, ctx) {
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

	const renderedData: JSX.Element[] = [];
	data.forEach((item) => {
		renderedData.push(<PersonInfo data={item} />);
	});

	return (
		<>
			<Head>
				<title>Fullstack Challenge</title>
			</Head>
			
			<div>
				{renderedData}
			</div>
		</>
	);
}
