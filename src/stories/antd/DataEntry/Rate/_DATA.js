export const CommonProps = {
	allowClear: {
		type: 'boolean',
		description: 'whether to allow clear when click again'
	},

	allowHalf: {
		type: 'boolean',
		description: 'whether to allow semi selection'
	},

	autoFocus: {
		type: 'boolean',
		description: 'get focus when component mounted'
	},

	character: {
		type: 'ReactNode < Icon type = "star" />',
		description: 'custom character of rate'
	},

	className: {
		type: 'string',
		description: 'custom class name of rate'
	},

	count: {
		type: 'number',
		description: 'star count'
	},

	defaultValue: {
		type: 'number',
		description: 'default value'
	},

	disabled: {
		type: 'boolean',
		description: 'read only, unable to interact'
	},

	style: {
		type: 'object',
		description: 'custom style object of rate'
	},

	tooltips: {
		type: 'string[] ',
		description: 'Customize tooltip by each character'
	},

	value: {
		type: 'number',
		description: 'current value'
	},

	onBlur: {
		type: 'Function()',
		description: 'callback when component lose focus'
	},
	onChange: {
		type: 'Function(value: number)',
		description: 'callback when select value'
	},

	onFocus: {
		type: 'Function()',
		description: 'callback when component get focus'
	},

	onHoverChange: {
		type: 'Function(value: number)',
		description: 'callback when hover item'
	},

	onKeyDown: {
		type: 'Function(event)',
		description: 'callback when keydown on component'
	},

}