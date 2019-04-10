export const CommonProps = [
  'https://ant.design/components/alert/#API',
  {
    afterClose: {
      type: '() => void',
      description: 'Called when close animation is finished',
    },

    banner: {
      type: 'boolean',
      description: 'Whether to show as banner',
      defaultValue: 'false',
    },

    closable: {
      type: 'boolean',
      description: 'Whether Alert can be closed',
    },

    closeText: {
      type: 'string|ReactNode',
      description: 'Close text to show',
    },

    description: {
      type: 'string|ReactNode',
      description: 'Additional content of Alert',
    },

    icon: {
      type: 'ReactNode',
      description: 'Custom icon, effective when showIcon is true',
    },

    message: {
      type: 'string|ReactNode',
      description: 'Content of Alert',
    },

    showIcon: {
      type: 'boolean',
      description: 'Whether to show icon',
      defaultValue: 'false, in banner mode default is true',
    },

    type: {
      type: 'string',
      description:
        'Type of Alert styles, options: success, info, warning, error',
      defaultValue: "'info', in banner mode default is 'warning'",
    },

    onClose: {
      type: '(e: MouseEvent) => void',
      description: 'Callback when Alert is closed',
    },
  },
];
