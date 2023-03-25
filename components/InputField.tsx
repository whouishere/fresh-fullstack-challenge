type InputProps = {
	value?: string
	name:   string
	label?: string
}

export default function InputField(props: InputProps) {
	return (
		<div>
			<input type="text" 
			       name={props.name} 
			       id={props.name} 
						 value={props.value || ""} 
						 placeholder={props.label || ""} />
		</div>
	);
}
