export const CommonProps = [
  'https://ant.design/components/auto-complete/#API',
  {
    allowClear: {
      type: 'boolean',
      description: 'Show clear button, effective in multiple mode only.',
      defaultValue: 'false',
    },

    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    backfill: {
      type: 'boolean',
      description: 'backfill selected item the input when using keyboard',
      defaultValue: 'false',
    },

    'children (for customize input element)': {
      type: 'HTMLInputElement / HTMLTextAreaElement / React.ReactElement',
      description: 'customize input element',
      defaultValue: '<Input/>',
    },

    'children (for dataSource)': {
      type: 'React.ReactElement / Array<React.ReactElement>',
      description: 'Data source for autocomplete',
    },

    dataSource: {
      type: 'DataSourceItemType[]',
      description: 'Data source for autocomplete',
    },

    defaultActiveFirstOption: {
      type: 'boolean',
      description: 'Whether active first option by default',
      defaultValue: 'true',
    },

    defaultValue: {
      type: 'string|string[]| -',
      description: 'Initial selected option',
    },

    disabled: {
      type: 'boolean',
      description: 'Whether disabled select',
      defaultValue: 'false',
    },

    filterOption: {
      type: 'boolean or function(inputValue, option)	',
      description:
        'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.',
      defaultValue: 'true',
    },

    optionLabelProp: {
      type: 'string',
      description:
        'Which prop value of option will render as content of select.',
      defaultValue: 'children',
    },

    placeholder: {
      type: 'string',
      description: '	placeholder of input',
    },

    value: {
      type:
        'string|string[]|{ key: string, label: string|ReactNode }|Array<{ key: string, label: string|ReactNode }>',
      description: 'selected option',
    },

    onBlur: {
      type: 'function()',
      description: 'Called when leaving the component.',
    },

    onChange: {
      type: 'function(value)',
      description:
        'Called when select an option or input value change, or value of input is changed',
    },

    onFocus: {
      type: 'function()',
      description: 'Called when entering the component',
    },

    onSearch: {
      type: 'function(value)',
      description: 'Called when searching items.',
    },

    onSelect: {
      type: 'function(value, option)',
      description:
        "Called when a option is selected. param is option's value and option instance.",
    },

    defaultOpen: {
      type: 'boolean',
      description: 'Initial open state of dropdown',
    },

    open: {
      type: 'boolean',
      description: 'Controlled open state of dropdown',
    },

    onDropdownVisibleChange: {
      type: 'function(open)',
      description: 'Call when dropdown open',
    },
  },
];
