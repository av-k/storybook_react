export const CardProps = [
  'https://ant.design/components/card/#Card',
  {
    actions: {
      type: 'Array<ReactNode>',
      description: 'The action list, shows at the bottom of the Card.',
    },

    activeTabKey: {
      type: 'string',
      description: "Current TabPane's key",
    },

    headStyle: {
      type: 'object',
      description: 'Inline style to apply to the card head',
    },

    bodyStyle: {
      type: 'object',
      description: 'Inline style to apply to the card content',
    },

    bordered: {
      type: 'boolean',
      description: 'Toggles rendering of the border around the card',
      defaultValue: 'true',
    },

    cover: {
      type: 'ReactNode',
      description: 'Card cover',
    },

    defaultActiveTabKey: {
      type: 'string',
      description: "Initial active TabPane's key, if activeTabKey is not set.",
    },

    extra: {
      type: 'string|ReactNode',
      description: 'Content to render in the top-right corner of the card',
    },

    hoverable: {
      type: 'boolean',
      description: 'Lift up when hovering card',
      defaultValue: 'false',
    },

    loading: {
      type: 'boolean',
      description:
        'Shows a loading indicator while the contents of the card are being fetched',
      defaultValue: 'false',
    },

    tabList: {
      type: 'Array<{key: string, tab: ReactNode}>',
      description: "List of TabPane's head.",
    },

    size: {
      type: 'default | small',
      description: 'Size of card',
      defaultValue: 'default',
    },

    title: {
      type: 'string|ReactNode',
      description: 'Card title',
    },

    type: {
      type: 'string',
      description: 'Card style type, can be set to inner or not set',
    },

    onTabChange: {
      type: '(key) => void',
      description: 'Callback when tab is switched',
    },
  },
];

export const CardGridProps = [
  'https://ant.design/components/card/#Card.Grid',
  {
    className: {
      type: 'string',
      description: 'className of container',
    },
    style: {
      type: 'object',
      description: 'style object of container',
    },
  },
];

export const CardMetaProps = [
  'https://ant.design/components/card/#Card.Meta',
  {
    avatar: {
      type: 'ReactNode',
      description: 'avatar or icon',
    },

    className: {
      type: 'string',
      description: 'className of container',
    },

    description: {
      type: 'ReactNode',
      description: 'description content',
    },

    style: {
      type: 'object',
      description: 'style object of container',
    },

    title: {
      type: 'ReactNode',
      description: 'title content',
    },
  },
];
