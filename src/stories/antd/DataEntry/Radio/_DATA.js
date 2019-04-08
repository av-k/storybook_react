export const RadioProps = [
  'https://ant.design/components/radio/#Radio',
  {
    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },
    checked: {
      type: 'boolean',
      description: 'Specifies whether the radio is selected.',
    },
    defaultChecked: {
      type: 'boolean',
      description:
        'Specifies the initial state: whether or not the radio is selected.',
      defaultValue: 'false',
    },
    disabled: {
      type: 'boolean',
      description: 'Disable radio',
      defaultValue: 'false',
    },
    value: {
      type: 'any',
      description:
        'According to value for comparison, to determine whether the selected',
    },
  },
];

export const RadioGroupProps = [
  'https://ant.design/components/radio/#RadioGroup',
  {
    defaultValue: {
      type: 'any',
      description: 'Default selected value',
    },
    disabled: {
      type: 'boolean',
      description: 'Disable all radio buttons',
      defaultValue: 'false',
    },
    name: {
      type: 'string',
      description: 'The name property of all input[type="radio"] children',
    },
    options: {
      type:
        'string[] | Array<{ label: string value: string disabled?: boolean }>',
      description: 'set children optional',
    },
    size: {
      type: 'large | default | small',
      description: 'size for radio button style',
      defaultValue: 'default',
    },
    value: {
      type: 'any',
      description: 'Used for setting the currently selected value.',
    },
    onChange: {
      type: 'Function(e:Event)',
      description:
        'The callback function that is triggered when the state changes.',
    },
    buttonStyle: {
      type: 'outline | solid	',
      description: 'style type of radio button',
      defaultValue: 'outline',
    },
  },
];
