import InputField from "../components/InputField.tsx";

const API_ROUTE = "/";

export default function PersonForm() {
	return (
		<form action={API_ROUTE}>
			<InputField name="first" label="First name" class="form input" />
			<InputField name="last"  label="Last name" class="form input" />
			<InputField name="part"  label="Participation" class="form input" />
			
			<button type="submit" class="form button">send</button>
		</form>
	);
}
