import { HandlerContext } from "$fresh/server.ts";

export interface Person {
	first: string
	last:  string
	part:  number
}

export type PersonProps = {
	data: Person[] | null
	error: string | null
}

const db: Person[] = [
	{
		first: "Carlos", 
		last:  "Moura", 
		part:  5
	}, 
	{
		first: "Fernanda", 
		last:  "Oliveira", 
		part:  15
	}
];

const DB_ERROR = {
	EMPTY_FIELD: "Please fill all fields properly.", 
	DOUBLE_DATA: "This person is already registered. Please use another name."
};

export const addPerson = (data: Person): string | null => {
	// check if any data is empty
	if (data.first === "" || data.last === "" || isNaN(data.part)) {
		return DB_ERROR.EMPTY_FIELD;
	}

	// check if the first and last name is doubled
	if (db.some((element) => (element.first === data.first && element.last === data.last))) {
		return DB_ERROR.DOUBLE_DATA;
	}

	db.push(data);
	return null;
};

export const handler = (_req: Request, _ctx: HandlerContext<PersonProps>): Response => {
	return new Response(JSON.stringify(db), {
		headers: { "Content-Type": "application/json" }
	});
};
