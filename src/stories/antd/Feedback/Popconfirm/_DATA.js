export const PopConfirmProps = [
  'https://ant.design/components/popconfirm/#API',
  {
    cancelText: {
      type: 'string',
      description: 'text of the Cancel button',
      defaultValue: 'Cancel',
    },

    okText: {
      type: 'string',
      description: 'text of the Confirm button',
      defaultValue: 'Confirm',
    },

    okType: {
      type: 'string',
      description: 'Button type of the Confirm button',
      defaultValue: 'primary',
    },

    title: {
      type: 'string|ReactNode',
      description: 'title of the confirmation box',
      defaultValue: '',
    },

    onCancel: {
      type: 'function(e)',
      description: 'callback of cancel',
      defaultValue: '',
    },

    onConfirm: {
      type: 'function(e)',
      description: 'callback of confirmation',
      defaultValue: '',
    },

    icon: {
      type: 'ReactNode',
      description: 'customize icon of confirmation',
      defaultValue: '<Icon type="exclamation-circle" />',
    },
  },
];
