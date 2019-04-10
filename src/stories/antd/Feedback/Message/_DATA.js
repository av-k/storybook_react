export const CommonProps = [
  'https://ant.design/components/message/#API',
  {
    content: {
      type: 'string|ReactNode',
      description: 'content of the message',
    },
    duration: {
      type: 'number',
      description:
        "time(seconds) before auto-dismiss, don't dismiss if set to 0",
      defaultValue: '1.5',
    },
    onClose: {
      type: 'Function',
      description:
        'Specify a function that will be called when the message is closed',
    },
  },
];

export const MessageOpenConfig = [
  'https://ant.design/components/message/#API',
  {
    content: {
      type: 'ReactNode',
      description: 'content of the message',
    },

    duration: {
      type: 'number',
      description:
        "time(seconds) before auto-dismiss, don't dismiss if set to 0",
      defaultValue: '3',
    },

    onClose: {
      type: 'function',
      description:
        'Specify a function that will be called when the message is closed',
    },

    icon: {
      type: 'ReactNode',
      description: 'Customized Icon',
    },
  },
];

export const MessageConfig = [
  'https://ant.design/components/message/#message.config',
  {
    duration: {
      type: 'number',
      description: 'time before auto-dismiss, in seconds',
      defaultValue: '1.5',
    },

    getContainer: {
      type: '() => HTMLElement',
      description: 'Return the mount node for Message',
      defaultValue: '() => document.body',
    },

    maxCount: {
      type: 'number',
      description: 'max message show, drop oldest if exceed limit',
    },

    top: {
      type: 'number',
      description: 'distance from top',
      defaultValue: '24',
    },
  },
];
