export const TableProps = [
  'https://ant.design/components/table/#Table',
  {
    bordered: {
      type: 'boolean',
      description: 'Whether to show all table borders',
      defaultValue: 'false',
    },

    childrenColumnName: {
      type: 'string[]',
      description: 'The column contains children to display',
      defaultValue: 'children',
    },

    columns: {
      type: 'ColumnProps[]',
      description: 'Columns of table',
    },

    components: {
      type: 'TableComponents',
      description: 'Override default table elements',
    },

    dataSource: {
      type: 'any[]',
      description: 'Data record array to be displayed',
    },

    defaultExpandAllRows: {
      type: 'boolean',
      description: 'Expand all rows initially',
      defaultValue: 'false',
    },

    defaultExpandedRowKeys: {
      type: 'string[]',
      description: 'Initial expanded row keys',
    },

    expandedRowKeys: {
      type: 'string[]',
      description: 'Current expanded row keys',
    },

    expandedRowRender: {
      type: 'Function(record, index, indent, expanded):ReactNode',
      description: 'Expanded container render for each row',
    },

    expandIcon: {
      type: 'Function(props):ReactNode',
      description: 'Customize row expand Icon.',
    },

    expandRowByClick: {
      type: 'boolean',
      description:
        'Whether to expand row by clicking anywhere in the whole row',
      defaultValue: 'false',
    },

    footer: {
      type: 'Function(currentPageData)',
      description: 'Table footer renderer',
    },

    indentSize: {
      type: 'number',
      description: 'Indent size in pixels of tree data',
      defaultValue: '15',
    },

    loading: {
      type: 'boolean|object (more)',
      description: 'Loading status of table',
      defaultValue: 'false',
    },

    locale: {
      type: 'object',
      description: 'i18n text including filter, sort, empty text, etc	',
      defaultValue:
        "filterConfirm: 'Ok', filterReset: 'Reset', emptyText: 'No Data', Default",
    },

    pagination: {
      type: 'object',
      description:
        'Config of pagination. You can ref table pagination config or full pagination document, hide it by setting it to false',
    },

    rowClassName: {
      type: 'Function(record, index):string',
      description: "Row's className",
    },

    rowKey: {
      type: 'string|Function(record):string',
      description:
        "Row's unique key, could be a string or function that returns a string",
      defaultValue: 'key',
    },

    rowSelection: {
      type: 'object',
      description: 'Row selection config',
      defaultValue: 'null',
    },

    scroll: {
      type: '{ x: number | true, y: number }',
      description:
        'Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area. It is recommended to set a number for x, if you want to set it to true, you need to add style .ant-table td { white-space: nowrap; }',
    },

    showHeader: {
      type: 'boolean',
      description: 'Whether to show table header',
      defaultValue: 'true',
    },

    size: {
      type: 'default | middle | small',
      description: 'Size of table',
      defaultValue: 'default',
    },

    title: {
      type: 'Function(currentPageData)	',
      description: 'Table title renderer',
    },

    onChange: {
      type:
        'Function(pagination, filters, sorter, extra: { currentDataSource: [] })',
      description:
        'Callback executed when pagination, filters or sorter is changed',
    },

    onExpand: {
      type: 'Function(expanded, record)',
      description: 'Callback executed when the row expand icon is clicked',
    },

    onExpandedRowsChange: {
      type: 'Function(expandedRows)',
      description: 'Callback executed when the expanded rows change',
    },

    onHeaderRow: {
      type: 'Function(column, index)',
      description: 'Set props on per header row',
    },

    onRow: {
      type: 'Function(record, index)',
      description: 'Set props on per row',
    },
  },
];

export const ColumnProps = [
  'https://ant.design/components/table/#Column',
  {
    align: {
      type: "'left' | 'right' | 'center'",
      description: 'specify how content is aligned',
      defaultValue: "'left'",
    },

    className: {
      type: 'string',
      description: 'className of this column',
    },

    colSpan: {
      type: 'number',
      description: "Span of this column's title",
    },

    dataIndex: {
      type: 'string',
      description:
        'Display field of the data record, could be set like a.b.c, a[0].b.c[1]',
    },

    defaultSortOrder: {
      type: "'ascend' | 'descend'",
      description: 'Default order of sorted values',
    },

    filterDropdown: {
      type: 'ReactNode',
      description: 'Customized filter overlay',
    },

    filterDropdownVisible: {
      type: 'boolean',
      description: 'Whether filterDropdown is visible',
    },

    filtered: {
      type: 'boolean',
      description: 'Whether the dataSource is filtered',
      defaultValue: 'false',
    },

    filteredValue: {
      type: 'string[]',
      description: 'Controlled filtered value, filter icon will highlight',
    },

    filterIcon: {
      type: 'ReactNode|(filtered: boolean) => ReactNode',
      description: 'Customized filter icon',
      defaultValue: 'false',
    },

    filterMultiple: {
      type: 'boolean',
      description: 'Whether multiple filters can be selected',
      defaultValue: 'true',
    },

    filters: {
      type: 'object[]',
      description: 'Filter menu config',
    },

    fixed: {
      type: 'boolean|string',
      description: "Set column to be fixed: true(same as left) 'left' 'right'",
      defaultValue: 'false',
    },

    key: {
      type: 'string',
      description:
        "Unique key of this column, you can ignore this prop if you've set a unique dataIndex",
    },

    render: {
      type: 'Function(text, record, index) {}',
      description:
        'Renderer of the table cell. The return value should be a ReactNode, or an object for colSpan/rowSpan config',
    },

    sorter: {
      type: 'Function|boolean',
      description:
        "Sort function for local sort, see Array.sort's compareFunction. If you need sort buttons only, set to true",
    },

    sortOrder: {
      type: 'boolean|string',
      description: "Order of sorted values: 'ascend' 'descend' false",
    },

    sortDirections: {
      type: "Array	['ascend', 'descend']",
      description: "supported sort way, could be 'ascend', 'descend'",
    },

    title: {
      type: 'ReactNode|({ sortOrder, filters }) => ReactNode',
      description: 'Title of this column',
    },

    width: {
      type: 'string|number',
      description: 'Width of this column',
    },

    onCell: {
      type: 'Function(record, rowIndex)',
      description: 'Set props on per cell',
    },

    onFilter: {
      type: 'Function',
      description:
        'Callback executed when the confirm filter button is clicked',
    },

    onFilterDropdownVisibleChange: {
      type: 'function(visible) {}',
      description: 'Callback executed when filterDropdownVisible is changed',
    },

    onHeaderCell: {
      type: 'Function(column)',
      description: 'Set props on per header cell',
    },
  },
];

export const ColumnGroupProps = [
  'https://ant.design/components/table/#ColumnGroup',
  {
    title: {
      type: 'string|ReactNode',
      description: 'Title of the column group',
    },
  },
];

export const pagination = [
  'https://ant.design/components/table/#pagination',
  {
    position: {
      type: "'top' | 'bottom' | 'both'",
      description: 'specify the position of Pagination',
      defaultValue: "'bottom'",
    },
  },
];

export const rowSelection = [
  'https://ant.design/components/table/#rowSelection',
  {
    columnWidth: {
      type: 'string|number',
      description: 'Set the width of the selection column',
    },

    columnTitle: {
      type: 'string|React.ReactNode',
      description: 'Set the title of the selection column',
    },

    fixed: {
      type: 'boolean',
      description: 'Fixed selection column on the left',
    },

    getCheckboxProps: {
      type: 'Function(record)',
      description: 'Get Checkbox or Radio props',
    },

    hideDefaultSelections: {
      type: 'boolean',
      description: 'Remove the default Select All and Select Invert selections',
      defaultValue: 'false',
    },

    selectedRowKeys: {
      type: 'string[]',
      description: 'Controlled selected row keys',
      defaultValue: '[]',
    },

    selections: {
      type: 'object[]|boolean',
      description:
        'Custom selection config, only displays default selections when set to true',
    },

    type: {
      type: 'checkbox | radio',
      description: 'checkbox or radio',
      defaultValue: 'checkbox',
    },

    onChange: {
      type: 'Function(selectedRowKeys, selectedRows)',
      description: 'Callback executed when selected rows change',
    },

    onSelect: {
      type: 'Function(record, selected, selectedRows, nativeEvent)',
      description: 'Callback executed when select/deselect one row',
    },

    onSelectAll: {
      type: 'Function(selected, selectedRows, changeRows)',
      description: 'Callback executed when select/deselect all rows',
    },

    onSelectInvert: {
      type: 'Function(selectedRows)',
      description: 'Callback executed when row selection is inverted',
    },
  },
];

export const seleection = [
  'https://ant.design/components/table/#selection',
  {
    key: {
      type: 'string',
      description: 'Unique key of this selection',
    },

    text: {
      type: 'string|React.ReactNode',
      description: 'Display text of this selection',
    },

    onSelect: {
      type: 'Function(changeableRowKeys)',
      description: 'Callback executed when this selection is clicked',
    },
  },
];
