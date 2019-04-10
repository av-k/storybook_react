export const NotificationConfigOptions = [
  'https://ant.design/components/notification/#API',
  {
    btn: {
      type: 'ReactNode',
      description: 'Customized close button',
      defaultValue: '',
    },
    className: {
      type: 'string',
      description: 'Customized CSS class',
      defaultValue: '',
    },
    description: {
      type: 'string|ReactNode',
      description: 'The content of notification box (required)',
      defaultValue: '',
    },
    duration: {
      type: 'number',
      description:
        'Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
      defaultValue: '4.5',
    },
    icon: {
      type: 'ReactNode',
      description: 'Customized icon',
      defaultValue: '',
    },
    key: {
      type: 'string',
      description: 'The unique identifier of the Notification',
      defaultValue: '',
    },
    message: {
      type: 'string|ReactNode',
      description: 'The title of notification box (required)',
      defaultValue: '',
    },
    placement: {
      type: 'string',
      description:
        'Position of Notification, can be one of topLeft topRight bottomLeft bottomRight',
      defaultValue: 'topRight',
    },
    style: {
      type: 'React.CSSProperties',
      description: 'Customized inline style',
      defaultValue: '',
    },
    onClose: {
      type: 'Function',
      description:
        'Specify a function that will be called when the close button is clicked',
      defaultValue: '',
    },
    onClick: {
      type: 'Function',
      description:
        'Specify a function that will be called when the notification is clicked',
      defaultValue: '',
    },
  },
];
export const NotificationGlobalConfigOptions = [
  'https://ant.design/components/notification/#API',
  {
    bottom: {
      type: 'number',
      description:
        'Distance from the bottom of the viewport, when placement is bottomRight or bottomLeft (unit: pixels).',
      defaultValue: '24',
    },

    duration: {
      type: 'number',
      description:
        'Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically',
      defaultValue: '4.5',
    },

    getContainer: {
      type: '() => HTMLNode',
      description: 'Return the mount node for Notification',
      defaultValue: '() => document.body',
    },

    placement: {
      type: 'string',
      description:
        'Position of Notification, can be one of topLeft topRight bottomLeft bottomRight',
      defaultValue: 'topRight',
    },

    top: {
      type: 'number',
      description:
        'Distance from the top of the viewport, when placement is topRight or topLeft (unit: pixels).',
      defaultValue: '24',
    },
  },
];
