type InputProps = {
	value?: string
	name:   string
	label?: string
	class?: string
}

export default function InputField(props: InputProps) {
	return (
		<>
			<input type="text" 
			       name={props.name} 
			       id={props.name} 
						 class={props.class || ""}
						 value={props.value || ""} 
						 placeholder={props.label || ""} />
		</>
	);
}
