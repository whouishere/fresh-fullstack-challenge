import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import PersonForm from "../islands/PersonForm.tsx";
import PersonList from "../islands/PersonList.tsx";
import { Person, PersonProps, handler as getData, addPerson } from "./api/data.ts";


// handler fetching data returning Person array or null
export const handler: Handlers<PersonProps> = {
	async GET(req, ctx) {
		const url = new URL(req.url);
		let err: string | null = null;
		
		// query new data from URL parameters and add it to the database
		if (url.searchParams.toString() !== "") {
			const first = url.searchParams.get("first");
			const last = url.searchParams.get("last");
			const part = parseInt(url.searchParams.get("part")!);

			err = addPerson({first: first!, last: last!, part: part});
		}

		// fetch the API data
		const res = getData(req, ctx);

		if (res.status === 404) {
			return ctx.render({ data: null, error: err });
		}

		const fullData: Person[] = await res.json();
		return ctx.render({ data: fullData, error: err });
	}
};

// use PageProps arguments to get fetched data
export default function Home(props: PageProps<PersonProps>) {
	if (!props.data.data) {
		return (
			<>
				<Head>
					<title>:(</title>
					<link rel="stylesheet" href={asset("style.css")} />
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
				<link rel="stylesheet" href={asset("style.css")} />
			</Head>

			<header class="header">
				<PersonForm />
				{(props.data.error != null) ? (<div id="input-error"> {props.data.error} </div>) : ""}
			</header>

			<div class="data">
				<h1>DATA</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

				<PersonList data={props.data.data} />
			</div>
		</>
	);
}
