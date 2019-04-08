export const CommonProps = {
	autoFocus: {
		type: 'boolean',
		description: 'get focus when component mounted',
	},

	defaultValue: {
		type: 'number|number[]',
		description: 'The default value of slider. When range is false, use number, otherwise, use [number, number]',
	},

	disabled: {
		type: 'boolean',
		description: 'If true, the slider will not be interactable.',
	},

	dots: {
		type: 'boolean',
		description: 'Whether the thumb can drag over tick only.',
	},

	included: {
		type: 'boolean',
		description: 'Make effect when marks not null, true means containment and false means coordinative',
	},

	marks: {
		type: 'object',
		description: 'Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style.',
	},

	max: {
		type: 'number',
		description: 'The maximum value the slider can slide to',
	},

	min: {
		type: 'number',
		description: 'The minimum value the slider can slide to',
	},

	range: {
		type: 'boolean',
		description: 'dual thumb mode',
	},

	step: {
		type: 'number|null',
		description: 'The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null.',
	},

	tipFormatter: {
		type: 'Function|null',
		description: 'Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null.',
	},

	value: {
		type: 'number|number[]',
		description: 'The value of slider. When range is false, use number, otherwise, use [number, number]',
	},

	vertical: {
		type: 'boolean',
		description: 'If true, the slider will be vertical.',
	},

	onAfterChange: {
		type: 'Function(value)',
		description: 'Fire when onmouseup is fired.',
	},

	onChange: {
		type: 'Function(value)',
		description: 'Callback function that is fired when the user changes the slider\'s value.',
	},

	tooltipVisible: {
		type: 'boolean',
		description: 'If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.',
	},

}