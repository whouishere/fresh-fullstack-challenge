import { Person } from "../routes/api/data.ts";

type PersonProps = {
	data: Person;
};

export function PersonInfo(props: PersonProps) {
	return (
		<div>
			<h3>{props.data.first} {props.data.last}</h3>
			<p>
				Participation: {props.data.part}%
			</p>
		</div>
	);
}
