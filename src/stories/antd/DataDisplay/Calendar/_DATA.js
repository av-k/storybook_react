export const CalendarProps = [
  'https://ant.design/components/calendar/#API',
  {
    dateCellRender: {
      type: 'function(date: moment): ReactNode',
      description:
        'Customize the display of the date cell, the returned content will be appended to the cell',
    },

    dateFullCellRender: {
      type: 'function(date: moment): ReactNode',
      description:
        'Customize the display of the date cell, the returned content will override the cell',
    },

    defaultValue: {
      type: 'moment',
      description: 'The date selected by default',
      defaultValue: 'default date',
    },

    disabledDate: {
      type: '	(currentDate: moment) => boolean',
      description: 'Function that specifies the dates that cannot be selected',
    },

    fullscreen: {
      type: 'boolean',
      description: 'Whether to display in full-screen',
      defaultValue: 'true',
    },

    locale: {
      type: 'object',
      description: "The calendar's locale",
      defaultValue: 'default',
    },

    mode: {
      type: 'month | year',
      description: 'The display mode of the calendar',
      defaultValue: 'month',
    },

    monthCellRender: {
      type: 'function(date: moment): ReactNode',
      description:
        'Customize the display of the month cell, the returned content will be appended to the cell',
    },

    monthFullCellRender: {
      type: 'function(date: moment): ReactNode',
      description:
        'Customize the display of the month cell, the returned content will override the cell',
    },
    validRange: {
      type: '[moment, moment]',
      description: 'to set valid range',
    },

    value: {
      type: 'moment',
      description: 'The current selected date',
      defaultValue: 'current date',
    },

    onPanelChange: {
      type: 'function(date: moment, mode: string)',
      description: 'Callback for when panel changes',
    },

    onSelect: {
      type: 'function(date: moment）',
      description: 'Callback for when a date is selected',
    },
    onChange: {
      type: 'function(date: moment)',
      description: 'Callback for when date changes',
    },
  },
];
