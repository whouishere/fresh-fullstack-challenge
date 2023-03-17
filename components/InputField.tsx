type InputProps = {
	value?: string
	name:   string
	label?: string
}

export default function InputField(props: InputProps) {
	return (
		<div>
			{!props.label ? null : <label>{props.label}</label>}
			<input type="text" name={props.name} id={props.name} value={props.value || ""} />
		</div>
	);
}
