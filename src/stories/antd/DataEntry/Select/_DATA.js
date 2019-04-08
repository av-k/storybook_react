export const SelectProps = [
  'https://ant.design/components/select/#Select-props',
  {
    allowClear: {
      type: 'boolean',
      description: 'Show clear button.',
      defaultValue: 'false',
    },

    autoClearSearchValue: {
      type: 'boolean',
      description:
        'Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags.',
      defaultValue: 'true',
    },

    autoFocus: {
      type: 'boolean',
      description: 'Get focus by default',
      defaultValue: 'false',
    },

    defaultActiveFirstOption: {
      type: 'boolean',
      description: 'Whether active first option by default',
      defaultValue: 'true',
    },

    defaultValue: {
      type: 'string|string[]',
      description: 'Initial selected option.',
    },

    disabled: {
      type: 'boolean',
      description: 'Whether disabled select',
      defaultValue: 'false',
    },

    dropdownClassName: {
      type: 'string',
      description: 'className of dropdown menu',
    },

    dropdownMatchSelectWidth: {
      type: 'boolean',
      description: "Whether dropdown's width is same with select.",
      defaultValue: 'true',
    },

    dropdownRender: {
      type: '	(menuNode: ReactNode, props) => ReactNode',
      description: 'Customize dropdown content',
    },
    dropdownStyle: {
      type: 'object',
      description: 'style of dropdown menu',
    },
    filterOption: {
      type: 'boolean or function(inputValue, option)',
      description:
        'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.',
      defaultValue: 'true',
    },

    firstActiveValue: {
      type: 'string|string[]',
      description: 'Value of action option by default',
    },

    getPopupContainer: {
      type: 'function(triggerNode)	() => document.body',
      description:
        'Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative.',
      defaultValue: '() => document.body',
    },

    labelInValue: {
      type: 'boolean',
      description:
        'whether to embed label in value, turn the format of value from string to {key: string, label: ReactNode}',
      defaultValue: 'false',
    },
    maxTagCount: {
      type: 'number',
      description: 'Max tag count to show',
    },

    maxTagPlaceholder: {
      type: 'ReactNode/function(omittedValues)',
      description: 'Placeholder for not showing tags',
    },

    mode: {
      type: "'default' | 'multiple' | 'tags'",
      description: 'Set mode of Select',
      defaultValue: "'default'",
    },

    notFoundContent: {
      type: 'string',
      description: 'Specify content to show when no result matches.',
      defaultValue: "'Not found'",
    },
    optionFilterProp: {
      type: 'string',
      description:
        'Which prop value of option will be used for filter if filterOption is true',
      defaultValue: 'value',
    },
    optionLabelProp: {
      type: 'string',
      description:
        'Which prop value of option will render as content of select.',
      defaultValue: 'value for combobox, children for other modes',
    },

    placeholder: {
      type: 'string|ReactNode',
      description: 'Placeholder of select',
    },

    showArrow: {
      type: 'boolean',
      description: 'Whether to show the drop-down arrow',
      defaultValue: 'true',
    },

    showSearch: {
      type: 'boolean',
      description: 'Whether show search input in single mode.',
      defaultValue: 'false',
    },
    size: {
      type: 'string',
      description: 'Size of Select input. default large small',
      defaultValue: 'default',
    },

    suffixIcon: {
      type: 'ReactNode',
      description: 'The custom suffix icon',
    },

    removeIcon: {
      type: 'ReactNode',
      description: 'The custom remove icon',
    },

    clearIcon: {
      type: 'ReactNode',
      description: 'The custom clear icon',
    },

    menuItemSelectedIcon: {
      type: 'ReactNode',
      description: 'The custom menuItemSelected icon',
    },

    tokenSeparators: {
      type: 'string[]',
      description: 'Separator used to tokenize on tag/multiple mode',
    },

    value: {
      type: 'string|number|string[]|number[]',
      description: 'Current selected option.',
    },

    onBlur: {
      type: 'function',
      description: 'Called when blur',
    },

    onChange: {
      type: 'function(value, option:Option/Array<Option>)',
      description:
        'Called when select an option or input value change, or value of input is changed in combobox mode',
    },

    onDeselect: {
      type: '	function(value, option:Option)',
      description:
        "Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only.",
    },

    onFocus: {
      type: 'function',
      description: 'Called when focus',
    },

    onInputKeyDown: {
      type: 'function',
      description: 'Called when key pressed',
    },
    onMouseEnter: {
      type: 'function',
      description: 'Called when mouse enter',
    },

    onMouseLeave: {
      type: 'function',
      description: 'Called when mouse leave',
    },

    onPopupScroll: {
      type: 'function',
      description: 'Called when dropdown scrolls',
    },

    onSearch: {
      type: 'function(value: string)	',
      description: 'Callback function that is fired when input changed.',
    },

    onSelect: {
      type: 'function(value, option:Option)',
      description:
        "Called when a option is selected, the params are option's value (or key) and option instance.",
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

    loading: {
      type: 'boolean',
      description: 'indicate loading state',
      defaultValue: 'false',
    },
  },
];

export const OptionProps = [
  'https://ant.design/components/select/#Option-props',
  {
    disabled: {
      type: 'boolean',
      description: 'Disable this option',
      defaultValue: 'false',
    },

    key: {
      type: 'string',
      description:
        'Same usage as value. If React request you to set this property, you can set it to value of option, and then omit value property.',
    },

    title: {
      type: 'string',
      description: 'title of Select after select this Option',
    },

    value: {
      type: 'string|number',
      description: 'default to filter with this property',
    },

    className: {
      type: 'string',
      description: 'additional class to option',
    },
  },
];

export const OptionGroupProps = [
  'https://ant.design/components/select/#OptGroup-props',
  {
    key: {
      type: 'string',
      description: 'key',
    },

    label: {
      type: 'string|React.Element',
      description: 'Group label',
    },
  },
];
