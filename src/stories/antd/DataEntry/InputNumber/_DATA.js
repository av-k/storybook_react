export const CommonProps = [
  'https://ant.design/components/input-number/#API',
  {
    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    defaultValue: {
      type: 'number',
      description: 'initial value',
    },

    disabled: {
      type: 'boolean',
      description: 'disable the input',
      defaultValue: 'false',
    },

    formatter: {
      type: 'function(value: number | string): string',
      description: 'Specifies the format of the value presented',
    },

    max: {
      type: 'number',
      description: 'max value',
      defaultValue: 'Infinity',
    },

    min: {
      type: 'number',
      description: 'min value',
      defaultValue: '-Infinity',
    },

    parser: {
      type: 'function( string): number',
      description: 'Specifies the value extracted from formatter',
    },

    precision: {
      type: 'number',
      description: 'precision of input value',
    },

    decimalSeparator: {
      type: 'string',
      description: 'decimal separator',
    },

    size: {
      type: 'string',
      description: 'width of input box',
    },

    step: {
      type: 'number|string',
      description:
        'The number to which the current value is increased or decreased. It can be an integer or decimal.',
      defaultValue: '1',
    },

    value: {
      type: 'number',
      description: 'current value',
    },

    onChange: {
      type: 'function(value: number | string)',
      description: 'The callback triggered when the value is changed.',
    },
  },
];
