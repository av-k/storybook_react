export const CommonProps = [
  'https://ant.design/components/progress/#API',
  {
    type: {
      type: 'string',
      description: 'to set the type, options: line circle dashboard',
      defaultValue: 'line',
    },

    format: {
      type: 'function(percent, successPercent)',
      description: 'template function of the content',
      defaultValue: "percent => percent + '%'",
    },

    percent: {
      type: 'number',
      description: 'to set the completion percentage',
      defaultValue: '0',
    },

    showInfo: {
      type: 'boolean',
      description: 'whether to display the progress value and the status icon',
      defaultValue: 'true',
    },

    status: {
      type: 'string',
      description:
        'to set the status of the Progress, options: success exception active normal',
      defaultValue: '',
    },

    strokeLinecap: {
      type: "Enum{ 'round', 'square' }",
      description: 'to set the style of the progress linecap',
      defaultValue: 'round',
    },

    strokeColor: {
      type: 'string',
      description: 'color of progress bar',
      defaultValue: '',
    },

    successPercent: {
      type: 'number',
      description: 'segmented success percent',
      defaultValue: '0',
    },
  },
];

export const line = [
  'https://ant.design/components/progress/#type="line"',
  {
    strokeWidth: {
      type: 'number',
      description: 'to set the width of the progress bar, unit: px',
      defaultValue: '10',
    },
    strokeColor: {
      type: 'string | { from: string; to: string; direction: string }	',
      description:
        'color of progress bar, render linear-gradient when passing an object',
      defaultValue: '',
    },
  },
];

export const circle = [
  'https://ant.design/components/progress/#type="circle"',
  {
    width: {
      type: 'number',
      description: 'to set the canvas width of the circular progress, unit: px',
      defaultValue: '132',
    },
    strokeWidth: {
      type: 'number',
      description:
        'to set the width of the circular progress, unit: percentage of the canvas width',
      defaultValue: '6',
    },
  },
];

export const dashboard = [
  'https://ant.design/components/progress/#type="dashboard"',
  {
    width: {
      type: 'number',
      description:
        'to set the canvas width of the dashboard progress, unit: px',
      defaultValue: '132',
    },

    strokeWidth: {
      type: 'number',
      description:
        'to set the width of the dashboard progress, unit: percentage of the canvas width',
      defaultValue: '6',
    },

    gapDegree: {
      type: 'number',
      description: 'the gap degree of half circle, 0 ~ 360',
      defaultValue: '0',
    },

    gapPosition: {
      type: 'string',
      description: 'the gap position, options: top bottom left right',
      defaultValue: 'top',
    },
  },
];
