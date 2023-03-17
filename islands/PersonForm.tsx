import InputField from "../components/InputField.tsx";

const API_ROUTE = "/";

export default function PersonForm() {
	return (
		<form action={API_ROUTE}>
			<InputField name="first" label="First name" />
			<InputField name="last"  label="Last name" />
			<InputField name="part"  label="Participation" />
			
			<button type="submit">Add person</button>
		</form>
	);
}
