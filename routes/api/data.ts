import { HandlerContext } from "$fresh/server.ts";

export interface Person {
	first: string
	last:  string
	part:  number
}

const staticData: Person[] = [
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

export const handler = (_req: Request, _ctx: HandlerContext<Person[] | null>): Response => {
	return new Response(JSON.stringify(staticData), {
		headers: { "Content-Type": "application/json" }
	});
};
