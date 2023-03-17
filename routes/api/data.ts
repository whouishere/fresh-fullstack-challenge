import { HandlerContext } from "$fresh/server.ts";

export interface Person {
	first: string
	last:  string
	part:  number
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

export const addPerson = (data: Person) => db.push(data);

export const handler = (_req: Request, _ctx: HandlerContext<Person[] | null>): Response => {
	return new Response(JSON.stringify(db), {
		headers: { "Content-Type": "application/json" }
	});
};
