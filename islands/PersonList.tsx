import { Person } from "../routes/api/data.ts";

export default function PersonList(props: { data: Person[] }) {
	return (
		<div>
			<table>
				<tr>
					<th>&nbsp;</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Participation</th>
				</tr>

				{props.data.map((person, index) => {
					// keep the participation percentage, *per-cent*
					if (person.part < 0 || isNaN(person.part) || person.part === null) {
						person.part = 0;
					} else if (person.part > 100) {
						person.part = 100;
					}

					return (
						<tr>
							<td>{index}</td>
							<td>{person.first}</td>
							<td>{person.last}</td>
							<td>{person.part}%</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}
