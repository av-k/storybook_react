export const TimelineProps = [
  'https://ant.design/components/timeline/#Timeline',
  {
    pending: {
      type: 'boolean|string|ReactNode',
      description: "Set the last ghost node's existence or its content",
      defaultValue: 'false',
    },

    pendingDot: {
      type: 'string|ReactNode',
      description: 'Set the dot of the last ghost node when pending is true',
      defaultValue: '<Icon type="loading" />',
    },

    reverse: {
      type: 'boolean',
      description: 'reverse nodes or not',
      defaultValue: 'false',
    },

    mode: {
      type: 'left | alternate | right',
      description:
        'By sending alternate the timeline will distribute the nodes to the left and right.',
      defaultValue: 'left',
    },
  },
];

export const TimelineItem = [
  'https://ant.design/components/timeline/#Timeline.Item',
  {
    color: {
      type: 'string',
      description:
        "Set the circle's color to blue, red, green or other custom colors",
      defaultValue: 'blue',
    },

    dot: {
      type: 'string|ReactNode',
      description: 'Customize timeline dot',
    },
  },
];
