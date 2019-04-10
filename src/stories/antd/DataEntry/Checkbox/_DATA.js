export const CheckBoxProps = [
  'https://ant.design/components/checkbox/#Checkbox',
  {
    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    checked: {
      type: 'boolean',
      description: 'Specifies whether the checkbox is selected.',
      defaultValue: 'false',
    },

    defaultChecked: {
      type: 'boolean',
      description:
        'Specifies the initial state: whether or not the checkbox is selected.',
      defaultValue: 'false',
    },

    disabled: {
      type: 'boolean',
      description: 'Disable checkbox',
      defaultValue: 'false',
    },

    indeterminate: {
      type: 'boolean',
      description: 'indeterminate checked state of checkbox',
      defaultValue: 'false',
    },

    onChange: {
      type: '	Function(e:Event)	',
      description:
        'The callback function that is triggered when the state changes.',
    },
  },
];

export const CheckBoxGroupProps = [
  'https://ant.design/components/checkbox/#Checkbox-Group',
  {
    defaultValue: {
      type: 'string[]',
      description: 'Default selected value',
      defaultValue: '[]',
    },
    disabled: {
      type: 'boolean',
      description: 'Disable all checkboxes',
      defaultValue: 'false',
    },
    name: {
      type: 'string',
      description: 'The name property of all input[type="checkbox"] children',
    },
    options: {
      type: 'string[]',
      description: 'Specifies options',
      defaultValue: '[]',
    },
    value: {
      type: 'string[]',
      description: 'Used for setting the currently selected value.',
      defaultValue: '[]',
    },
    onChange: {
      type: 'Function(checkedValue)',
      description:
        'The callback function that is triggered when the state changes.',
    },
  },
];
