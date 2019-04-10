export const CollapseProps = [
  'https://ant.design/components/collapse/#Collapse',
  {
    activeKey: {
      type: 'string[]|string',
      description: 'Key of the active panel',
      defaultValue:
        "No default value. In accordion mode, it's the key of the first panel.",
    },

    defaultActiveKey: {
      type: 'string',
      description: 'Key of the initial active panel',
    },

    bordered: {
      type: 'boolean',
      description: 'Toggles rendering of the border around the collapse block',
      defaultValue: 'true',
    },

    accordion: {
      type: 'boolean',
      description: 'If true, Collapse renders as Accordion',
      defaultValue: 'false',
    },

    onChange: {
      type: 'Function',
      description: 'Callback function executed when active panel is changed',
    },

    expandIcon: {
      type: '(panelProps) => ReactNode',
      description: 'allow to customize collapse icon',
    },

    destroyInactivePanel: {
      type: 'boolean',
      description: 'Destroy Inactive Panel',
      defaultValue: 'false',
    },
  },
];

export const CollapsePanelProps = [
  'https://ant.design/components/collapse/#Collapse.Panel',
  {
    disabled: {
      type: 'boolean',
      description: 'If true, panel cannot be opened or closed',
      defaultValue: 'false',
    },

    forceRender: {
      type: 'boolean',
      description:
        'Forced render of content on panel, instead of lazy rending after clicking on header',
      defaultValue: 'false',
    },

    header: {
      type: 'string|ReactNode',
      description: 'Title of the panel',
    },

    key: {
      type: 'string',
      description: 'Unique key identifying the panel from among its siblings',
    },

    showArrow: {
      type: 'boolean',
      description: 'If false, panel will not show arrow icon',
      defaultValue: 'true',
    },

    extra: {
      type: 'ReactNode',
      description: 'extra element in the corner',
    },
  },
];
