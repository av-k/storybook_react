export const CommonProps = {
  allowClear: {
    type: 'boolean',
    description: 'Whether to show clear button',
  },
  autoFocus: {
    type: 'boolean',
    description: 'get focus when component mounted',
  },
  className: {
    type: 'string',
    description: 'picker className',
  },
  dateRender: {
    type: 'function(currentDate: moment, today: moment) => React.ReactNode',
    description: 'custom rendering function for date cells',
  },
  disabled: {
    type: 'boolean',
    description: 'determine whether the DatePicker is disabled',
  },
  disabledDate: {
    type: '(currentDate: moment) => boolean',
    description: 'specify the date that cannot be selected',
  },
  dropdownClassName: {
    type: 'string',
    description: 'to customize the className of the popup calendar',
  },
  getCalendarContainer: {
    type: 'function(trigger)',
    description:
      'to set the container of the floating layer, while the default is to create a div element in body',
  },
  locale: {
    type: 'object',
    description: 'localization configuration',
  },
  mode: {
    type: 'time|date|month|year',
    description: 'picker panel mode',
  },
  open: {
    type: 'boolean',
    description: 'open state of picker',
  },
  placeholder: {
    type: 'string|RangePicker[]',
    description: 'placeholder of date input',
  },
  popupStyle: {
    type: 'object',
    description: 'to customize the style of the popup calendar',
  },
  size: {
    type: 'string',
    description:
      'determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px',
  },
  suffixIcon: {
    type: 'ReactNode',
    description: 'The custom suffix icon',
  },
  style: {
    type: 'object',
    description: 'to customize the style of the input box',
  },
  onOpenChange: {
    type: 'function(status)',
    description:
      'a callback function, can be executed whether the popup calendar is popped up or closed',
  },
  onPanelChange: {
    type: '	function(value, mode)',
    description: 'callback when picker panel mode is changed',
  },
};

export const DatePickerProps = {
  defaultValue: {
    type: 'moment',
    description:
      'to set default date, if start time or end time is null or undefined, the date range will be an open interval',
  },
  defaultPickerValue: {
    type: 'moment',
    description: 'to set default picker date',
  },
  disabledTime: {
    type: 'function(date)',
    description: 'to specify the time that cannot be selected',
  },
  format: {
    type: 'string | string[]',
    description:
      'to set the date format, refer to moment.js. When an array is provided, all values are used for parsing and first value is used for formatting.',
  },
  renderExtraFooter: {
    type: '(mode) => React.ReactNode',
    description: 'render extra footer in panel',
  },
  showTime: {
    type: 'object|boolean',
    description: 'to provide an additional time selection',
  },
  showTimedefaultValue: {
    type: 'moment',
    description: 'to set default time of selected date',
  },
  showToday: {
    type: 'boolean',
    description: 'whether to show "Today" button',
  },
  value: {
    type: 'moment',
    description: 'to set date',
  },
  onChange: {
    type: 'function(date: moment, dateString: string)',
    description:
      'a callback function, can be executed when the selected time is changing',
  },
  onOk: {
    type: 'function()',
    description: 'callback when click ok button',
  },
};

export const MonthPickerProps = {
  defaultValue: {
    type: 'moment',
    description: 'to set default date	',
  },
  defaultPickerValue: {
    type: 'moment',
    description: 'to set default picker date',
  },
  format: {
    type: 'string',
    description: 'to set the date format, refer to moment.js',
  },
  monthCellContentRender: {
    type: 'function(date, locale): ReactNode',
    description: 'Custom month cell content render method',
  },
  renderExtraFooter: {
    type: '() => React.ReactNode',
    description: 'render extra footer in panel',
  },
  value: {
    type: 'to set date',
    description: 'moment',
  },
  onChange: {
    type: 'function(date: moment, dateString: string)',
    description:
      'a callback function, can be executed when the selected time is changing',
  },
};

export const WeekPickerProps = {
  defaultValue: {
    type: 'moment',
    description: 'to set default date	',
  },
  defaultPickerValue: {
    type: 'moment',
    description: 'to set default picker date',
  },
  format: {
    type: 'string',
    description: 'to set the date format, refer to moment.js',
  },
  value: {
    type: 'moment',
    description: 'to set date',
  },
  onChange: {
    type: 'function(date: moment, dateString: string)',
    description:
      'a callback function, can be executed when the selected time is changing',
  },
  renderExtraFooter: {
    type: '() => React.ReactNode',
    description: 'render extra footer in panel',
  },
};

export const RangePickerProps = {
  defaultValue: {
    type: '[moment, moment]',
    description: 'to set default date',
  },
  defaultPickerValue: {
    type: '[moment, moment]',
    description: 'to set default picker date',
  },
  disabledTime: {
    type: "function(dates: [moment, moment], partial: 'start'|'end')",
    description: 'to specify the time that cannot be selected',
  },
  format: {
    type: 'string | string[]',
    description:
      'to set the date format, refer to moment.js. When an array is provided, all values are used for parsing and first value is used for formatting.',
  },
  ranges: {
    type: '{ [range: string]: moment[] } | { [range: string]: () => moment[] }',
    description: 'preseted ranges for quick selection',
  },
  renderExtraFooter: {
    type: '() => React.ReactNode',
    description: 'render extra footer in panel',
  },
  separator: {
    type: 'string',
    description: 'set separator between inputs',
  },
  showTime: {
    type: 'object|boolean',
    description: 'to provide an additional time selection',
  },
  showTimedefaultValue: {
    type: 'moment[]',
    description: 'to set default time of selected date',
  },
  value: {
    type: '[moment, moment]',
    description: 'to set date',
  },
  onCalendarChange: {
    type: 'function(dates: [moment, moment], dateStrings: [string, string])',
    description:
      'a callback function, can be executed when the start time or the end time of the range is changing',
  },
  onChange: {
    type: 'function(dates: [moment, moment], dateStrings: [string, string])',
    description:
      'a callback function, can be executed when the selected time is changing',
  },
  onOk: {
    type: 'function(dates: moment[])',
    description: 'callback when click ok button',
  },
};
