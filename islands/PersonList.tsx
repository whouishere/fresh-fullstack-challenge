import { Person } from "../routes/api/data.ts";

export default function PersonList(props: { data: Person[] }) {
	return (
		<div>
			<ul>
				{props.data.map((person) => {
					// keep the participation percentage, *per-cent*
					if (person.part < 0) {
						person.part = 0;
					} else if (person.part > 100) {
						person.part = 100;
					}

					return (
						<li>
							<h3>{person.first} {person.last}</h3>
							<strong>Participation:</strong> {person.part}%
						</li>
					);
				})}
			</ul>
		</div>
	);
}
