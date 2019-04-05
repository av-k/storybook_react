export const AutoCompleteProps = {
  dataSource: {
    type: 'DataSourceItemType[]',
    description: 'Data source for autocomplete',
  },
  onSearch: {
    type: 'Function(value)',
    description: 'Called when searching items.',
  },
  onSelect: {
    type: 'Function(value, option)',
    description:
      "Called when a option is selected. param is option's value and option instance.",
  },
  placeholder: {
    type: 'string',
    description: 'Placeholder of input',
  },
  filterOption: {
    type: 'boolean or Function(inputValue, option)',
    description:
      'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.',
  },
  dropdownClassName: {
    type: 'string',
    description: 'Classname for dropdown',
  },
  dropdownMatchSelectWidth: {
    type: 'boolean',
    description: 'If true, dropdown will match the select width',
  },
  dropdownStyle: {
    type: 'Styles Object',
    description: 'Inline styles of dropdown',
  },
  optionLabelProp: {
    type: 'string',
    description: 'Which prop value of option will render as content of select.',
  },

  onChange: {
    type: 'Function(checkedValue)',
    description:
      'The callback function that is triggered when the state changes',
  },
  onKeyPress: {
    type: 'Function(value)',
    description: 'Called when pressing a key.',
  },
  size: {
    type: 'string',
    description: 'Size (small, large, etc.)',
  },
};

export const CheckBoxProps = {
  onChange: {
    type: 'Function(checkedValue)',
    description:
      'The callback function that is triggered when the state changes',
  },
  autoFocus: {
    type: 'boolean',
    description: 'Get focus when component mounted',
  },
  checked: {
    type: 'boolean',
    description: 'Specifies whether the checkbox is selected.',
  },
  defaultChecked: {
    type: 'boolean',
    description:
      'Specifies the initial state: whether or not the checkbox is selected.',
  },
  disabled: {
    type: 'boolean',
    description: 'Disable checkbox / all checkboxes for group',
  },
  indeterminate: {
    type: 'boolean',
    description: 'Indeterminate checked state of checkbox',
  },
  defaultValue: {
    type: 'string[]',
    description: 'Default selected value',
  },
  name: {
    type: 'string',
    description: 'The name property of all input[type="checkbox"] children',
  },
  options: {
    type: 'string[]',
    description: 'Specifies options',
  },
  value: {
    type: 'string[]',
    description: 'Used for setting the currently selected value',
  },
};
