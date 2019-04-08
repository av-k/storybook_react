export const CommonProps = [
  'https://ant.design/components/switch/#API',
  {
    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    checked: {
      type: 'boolean',
      description: 'determine whether the Switch is checked',
      defaultValue: 'false',
    },

    checkedChildren: {
      type: '	string|ReactNode',
      description: 'content to be shown when the state is checked',
    },

    defaultChecked: {
      type: 'boolean',
      description: '	to set the initial state',
      defaultValue: 'false',
    },

    disabled: {
      type: 'boolean',
      description: 'Disable switch',
      defaultValue: 'false',
    },

    loading: {
      type: 'boolean',
      description: 'loading state of switch',
      defaultValue: 'false',
    },

    size: {
      type: 'string',
      description: 'the size of the Switch, options: default small',
      defaultValue: 'default',
    },

    unCheckedChildren: {
      type: 'string|ReactNode',
      description: 'content to be shown when the state is unchecked',
    },

    onChange: {
      type: 'Function(checked: boolean, event: Event)',
      description: 'trigger when the checked state is changing',
    },

    onClick: {
      type: 'Function(checked: boolean, event: Event)',
      description: 'trigger when clicked',
    },

    className: {
      type: 'string',
      description: 'additional class to Switch',
    },
  },
];
