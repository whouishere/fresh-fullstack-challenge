import { Person } from "../routes/api/data.ts";

export default function PersonList(props: { data: Person[] }) {
	return (
		<div class="list">
			<table>
				<tr>
					<th class="table index">&nbsp;</th>
					<th class="table first">First name</th>
					<th class="table last" >Last name</th>
					<th class="table part" >Participation</th>
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
							<td class="table index">{index}</td>
							<td class="table first">{person.first}</td>
							<td class="table last" >{person.last}</td>
							<td class="table part" >{person.part}%</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}
