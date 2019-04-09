export const TabProps = [
  'https://ant.design/components/tabs/#Tabs',
  {
    activeKey: {
      type: 'string',
      description: "Current TabPane's key",
    },

    animated: {
      type: 'boolean | {inkBar:boolean, tabPane:boolean}',
      description:
        'Whether to change tabs with animation. Only works while tabPosition="top"|"bottom"',
      defaultValue: 'true, false when type="card"',
    },

    renderTabBar: {
      type:
        '(props: DefaultTabBarProps, DefaultTabBar: React.ReactNode) => React.ReactNode',
      description: 'replace the TabBar',
    },

    defaultActiveKey: {
      type: 'string',
      description: "Initial active TabPane's key, if activeKey is not set.",
    },

    hideAdd: {
      type: 'boolean',
      description:
        'Hide plus icon or not. Only works while type="editable-card"',
      defaultValue: 'false',
    },

    size: {
      type: 'large | default | small',
      description: 'preset tab bar size',
      defaultValue: 'default',
    },

    tabBarExtraContent: {
      type: 'React.ReactNode',
      description: 'Extra content in tab bar',
    },

    tabBarGutter: {
      type: 'number',
      description: 'The gap between tabs',
    },

    tabBarStyle: {
      type: 'object',
      description: 'Tab bar style object',
    },

    tabPosition: {
      type: 'top | right | bottom | left',
      description: 'Position of tabs',
      defaultValue: 'top',
    },

    type: {
      type: 'line | card | editable-card',
      description: 'Basic style of tabs',
      defaultValue: 'line',
    },

    onChange: {
      type: 'Function(activeKey) {}',
      description: 'Callback executed when active tab is changed',
    },

    onEdit: {
      type: '(targetKey, action): void',
      description:
        'Callback executed when tab is added or removed. Only works while type="editable-card"',
    },

    onNextClick: {
      type: 'Function',
      description: 'Callback executed when next button is clicked',
    },

    onPrevClick: {
      type: 'Function',
      description: 'Callback executed when prev button is clicked',
    },

    onTabClick: {
      type: 'Function(key: string, event: MouseEvent)',
      description: 'Callback executed when tab is clicked',
    },
  },
];

export const TabPaneProps = [
  'https://ant.design/components/tabs/#Tabs.TabPane',
  {
    forceRender: {
      type: 'boolean',
      description:
        'Forced render of content in tabs, not lazy render after clicking on tabs',
      defaultValue: 'false',
    },
    key: {
      type: 'string',
      description: "TabPane's key",
    },
    tab: {
      type: 'string|ReactNode',
      description: "Show text in TabPane's head",
    },
  },
];
