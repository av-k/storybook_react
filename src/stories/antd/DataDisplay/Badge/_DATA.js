export const BadgeProps = [
  'https://ant.design/components/badge/#API',
  {
    color: {
      type: 'string',
      description: 'Customize Badge dot color',
    },

    count: {
      type: 'ReactNode',
      description: 'Number to show in badge',
    },

    dot: {
      type: 'boolean',
      description: 'Whether to display a red dot instead of count',
      defaultValue: 'false',
    },

    offset: {
      type: '[number, number]',
      description: 'set offset of the badge dot, like[x, y]',
    },

    overflowCount: {
      type: 'number',
      description: 'Max count to show',
      defaultValue: '99',
    },

    showZero: {
      type: 'boolean',
      description: 'Whether to show badge when count is zero',
      defaultValue: 'false',
    },

    status: {
      type: 'success | processing | default | error | warning',
      description: 'Set Badge as a status dot',
      defaultValue: "''",
    },

    text: {
      type: 'string',
      description:
        'If status is set, text sets the display text of the status dot',
      defaultValue: "''",
    },

    title: {
      type: 'string',
      description: 'Text to show when hovering over the badge',
      defaultValue: 'count',
    },
  },
];
