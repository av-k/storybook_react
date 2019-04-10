export const ListProps = [
  'https://ant.design/components/list/#List',
  {
    bordered: {
      type: 'boolean',
      description: 'Toggles rendering of the border around the list',
      defaultValue: 'false',
    },

    footer: {
      type: 'string|ReactNode',
      description: 'List footer renderer',
    },

    grid: {
      type: 'object',
      description:
        'The grid type of list. You can set grid to something like {gutter: 16, column: 4}',
    },

    header: {
      type: 'string|ReactNode',
      description: 'List header renderer',
    },

    itemLayout: {
      type: 'string',
      description:
        'The layout of list, default is horizontal, If a vertical list is desired, set the itemLayout property to vertical',
    },

    rowKey: {
      type: 'string|Function(record):string',
      description:
        "Item's unique key, could be a string or function that returns a string",
      defaultValue: 'key',
    },

    loading: {
      type: 'boolean|object (more)',
      description:
        'Shows a loading indicator while the contents of the list are being fetched',
      defaultValue: 'false',
    },

    loadMore: {
      type: 'string|ReactNode',
      description: 'Shows a load more content',
      defaultValue: '',
    },

    locale: {
      type: 'object',
      description: 'i18n text including empty text',
      defaultValue: "emptyText: 'No Data'",
    },

    pagination: {
      type: 'boolean | object',
      description: 'Pagination config, hide it by setting it to false',
      defaultValue: 'false',
    },

    split: {
      type: 'boolean',
      description: 'Toggles rendering of the split under the list item',
      defaultValue: 'true',
    },
  },
];

export const pagination = [
  'https://ant.design/components/list/#pagination',
  {
    position: {
      type: "'top' | 'bottom' | 'both'",
      description: 'specify the position of Pagination',
      defaultValue: "bottom'",
    },
  },
];

export const ListGridProps = [
  'https://ant.design/components/list/#List-grid-props',
  {
    column: {
      type: 'number',
      description: 'column of grid, optional number',
    },

    gutter: {
      type: 'number',
      description: 'spacing between grid',
      defaultValue: '0',
    },

    size: {
      type: 'default | middle | small',
      description: 'Size of list',
      defaultValue: 'default',
    },

    xs: {
      type: 'number',
      description: '<576px column of grid',
    },

    sm: {
      type: 'number',
      description: '≥576px column of grid',
    },

    md: {
      type: 'number',
      description: '≥768px column of grid',
    },

    lg: {
      type: 'number',
      description: '≥992px column of grid',
    },

    xl: {
      type: 'number',
      description: '≥1200px column of grid',
    },

    xxl: {
      type: 'number',
      description: '≥1600px column of grid',
    },
  },
];

export const ListItemProps = [
  'https://ant.design/components/list/#List.Item',
  {
    actions: {
      type: 'Array',
      description:
        'The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right.',
    },
    extra: {
      type: 'string|ReactNode',
      description:
        'The extra content of list item. If itemLayout is vertical, shows the content on right, otherwise shows content on the far right.',
    },
  },
];

export const ListItemMetaProps = [
  'https://ant.design/components/list/#List.Item.Meta',
  {
    avatar: {
      type: 'ReactNode',
      description: 'The avatar of list item',
    },
    description: {
      type: 'string|ReactNode',
      description: 'The description of list item',
    },
    title: {
      type: 'string|ReactNode',
      description: 'The title of list item',
    },
  },
];
