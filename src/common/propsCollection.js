export const dataSource = {
  type: 'DataSourceItemType[]',
  description: 'Data source for autocomplete',
};
export const onSelect = {
  type: 'Function(value, option)',
  description:
    "Called when a option is selected. param is option's value and option instance.",
};
export const placeholder = {
  type: 'string',
  description: 'Placeholder of input',
};
export const filterOption = {
  type: 'boolean or Function(inputValue, option)',
  description:
    'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.',
};

export const dropdownClassName = {
  type: 'string',
  description: 'Classname for dropdown',
};
export const dropdownMatchSelectWidth = {
  type: 'boolean',
  description: 'If true, dropdown will match the select width',
};

export const dropdownStyle = {
  type: 'Styles Object',
  description: 'Inline styles of dropdown',
};

export const optionLabelProp = {
  type: 'string',
  description: 'Which prop value of option will render as content of select.',
};

//common
export const onSearch = {
  type: 'Function(value)',
  description: 'Called when searching items.',
};
export const onChange = {
  type: 'Function(checkedValue)',
  description: 'The callback function that is triggered when the state changes',
};
export const onKeyPress = {
  type: 'Function(value)',
  description: 'Called when pressing a key.',
};
export const size = {
  type: 'string',
  description: 'Size (small, large, etc.)',
};

// checkboxes
export const autoFocus = {
  type: 'boolean',
  description: 'Get focus when component mounted',
};
export const checked = {
  type: 'boolean',
  description: 'Specifies whether the checkbox is selected.',
};
export const defaultChecked = {
  type: 'boolean',
  description:
    'Specifies the initial state: whether or not the checkbox is selected.',
};
export const disabled = {
  type: 'boolean',
  description: 'Disable checkbox / all checkboxes for group',
};
export const indeterminate = {
  type: 'boolean',
  description: 'Indeterminate checked state of checkbox',
};

//checkbox group
export const defaultValue = {
  type: 'string[]',
  description: 'Default selected value',
};
export const name = {
  type: 'string',
  description: 'The name property of all input[type="checkbox"] children',
};
export const options = {
  type: 'string[]',
  description: 'Specifies options',
};
export const value = {
  type: 'string[]',
  description: 'Used for setting the currently selected value',
};
