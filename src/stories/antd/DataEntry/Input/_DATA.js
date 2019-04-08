export const InputProps = [
  'https://ant.design/components/input/#Input',
  {
    addonAfter: {
      type: 'string|ReactNode',
      description:
        'The label text displayed after (on the right side of) the input field.	',
    },
    addonBefore: {
      type: 'string|ReactNode	',
      description:
        'The label text displayed before (on the left side of) the input field.',
    },
    defaultValue: {
      type: 'string',
      description: 'The initial input content',
    },
    disabled: {
      type: 'boolean',
      description: 'Whether the input is disabled.',
    },
    id: {
      type: 'string',
      description: 'The ID for input',
    },
    prefix: {
      type: 'string|ReactNode',
      description: 'The prefix icon for the Input.',
    },
    size: {
      type: 'string',
      description:
        'The size of the input box. Note: in the context of a form, the large size is used. Available: large default small',
    },
    suffix: {
      type: 'string|ReactNode',
      description: 'The suffix icon for the Input.',
    },
    type: {
      type: 'string',
      description:
        'The type of input, see: MDN(use Input.TextArea instead of type="textarea")',
    },
    value: {
      type: 'string',
      description: 'The input content value',
    },
    onChange: {
      type: 'function(e)	',
      description: 'callback when user input',
    },
    onPressEnter: {
      type: 'function(e)	',
      description:
        'The callback function that is triggered when Enter key is pressed.',
    },
    allowClear: {
      type: 'boolean',
      description: 'allow to remove input content with clear icon	',
    },
  },
];

export const InputTextAreaProps = [
  'https://ant.design/components/input/#Input.TextArea',
  {
    autosize: {
      type: 'boolean|object',
      description:
        'Height autosize feature, can be set to true|false or an object { minRows: 2, maxRows: 6 }',
    },
    defaultValue: {
      type: 'string',
      description: 'The initial input content',
    },
    value: {
      type: 'string',
      description: 'The input content value',
    },
    onPressEnter: {
      type: 'function(e)',
      description:
        'The callback function that is triggered when Enter key is pressed.',
    },
  },
];

export const InputSearchProps = [
  'https://ant.design/components/input/#Input.Search',
  {
    enterButton: {
      type: 'boolean|ReactNode',
      description:
        'to show an enter button after input. This prop is conflict with addon.',
    },
    onSearch: {
      type: 'function(value, event)',
      description:
        'The callback function that is triggered when you click on the search-icon or press Enter key.',
    },
  },
];

export const InputGroupProps = [
  'https://ant.design/components/input/#Input.Group',
  {
    compact: {
      type: 'boolean',
      description: 'Whether use compact style',
    },
    size: {
      type: 'string',
      description:
        'The size of Input.Group specifies the size of the included Input fields. Available: large, default, small',
    },
  },
];

export const InputPasswordProps = [
  'https://ant.design/components/input/#Input.Password-(Added-in-3.12.0)',
  {
    visibilityToggle: {
      type: 'boolean',
      description: 'Whether show toggle button',
    },
  },
];
