export const dataSource = {
  type: 'DataSourceItemType[]',
  description: 'Data source for autocomplete',
};

export const onSearch = {
  type: 'function(value)',
  description: 'Called when searching items.',
};

export const onSelect = {
  type: 'function(value, option)',
  description:
    "Called when a option is selected. param is option's value and option instance.",
};

export const placeholder = {
  type: 'string',
  description: 'Placeholder of input',
};

export const onKeyPress = {
  type: 'function(value)',
  description: 'Called when pressing a key.',
};

export const filterOption = {
  type: 'boolean or function(inputValue, option)',
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

export const size = {
  type: 'string',
  description: 'Size (small, large, etc.)',
};

export const optionLabelProp = {
  type: 'string',
  description: 'Which prop value of option will render as content of select.',
};
