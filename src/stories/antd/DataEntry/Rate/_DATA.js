export const CommonProps = [
  'https://ant.design/components/rate/#API',
  {
    allowClear: {
      type: 'boolean',
      description: 'whether to allow clear when click again',
      defaultValue: 'true',
    },

    allowHalf: {
      type: 'boolean',
      description: 'whether to allow semi selection',
      defaultValue: 'false',
    },

    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    character: {
      type: 'ReactNode < Icon type = "star" />',
      description: 'custom character of rate',
      defaultValue: '<Icon type="star"/>',
    },

    className: {
      type: 'string',
      description: 'custom class name of rate',
    },

    count: {
      type: 'number',
      description: 'star count',
      defaultValue: '5',
    },

    defaultValue: {
      type: 'number',
      description: 'default value',
      defaultValue: '0',
    },

    disabled: {
      type: 'boolean',
      description: 'read only, unable to interact',
      defaultValue: 'false',
    },

    style: {
      type: 'object',
      description: 'custom style object of rate',
    },

    tooltips: {
      type: 'string[] ',
      description: 'Customize tooltip by each character',
    },

    value: {
      type: 'number',
      description: 'current value',
    },

    onBlur: {
      type: 'Function()',
      description: 'callback when component lose focus',
    },
    onChange: {
      type: 'Function(value: number)',
      description: 'callback when select value',
    },

    onFocus: {
      type: 'Function()',
      description: 'callback when component get focus',
    },

    onHoverChange: {
      type: 'Function(value: number)',
      description: 'callback when hover item',
    },

    onKeyDown: {
      type: 'Function(event)',
      description: 'callback when keydown on component',
    },
  },
];
