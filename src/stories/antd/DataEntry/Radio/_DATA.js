export const RadioProps = {
	autoFocus: {
		type: 'boolean',
		description: 'get focus when component mounted'
	},
	checked: {
		type: 'boolean',
		description: 'Specifies whether the radio is selected.'
	},
	defaultChecked: {
		type: 'boolean',
		description: 'Specifies the initial state: whether or not the radio is selected.'
	},
	disabled: {
		type: 'boolean',
		description: 'Disable radio'
	},
	value: {
		type: 'any',
		description: 'According to value for comparison, to determine whether the selected'
	},
}

export const RadioGroupProps = {
	defaultValue: {
		type: 'any',
		description: 'Default selected value'
	},
	disabled: {
		type: 'boolean',
		description: 'Disable all radio buttons'
	},
	name: {
		type: 'string',
		description: 'The name property of all input[type="radio"] children'
	},
	options: {
		type: 'string[] | Array<{ label: string value: string disabled?: boolean }>',
		description: 'set children optional'
	},
	size: {
		type: 'large | default | small',
		description: 'size for radio button style'
	},
	value: {
		type: 'any',
		description: 'Used for setting the currently selected value.'
	},
	onChange: {
		type: 'Function(e:Event)',
		description: 'The callback function that is triggered when the state changes.'
	},
	buttonStyle: {
		type: 'outline | solid	',
		description: 'style type of radio button'
	},
}