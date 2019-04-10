export const CommonProps = [
  'https://ant.design/components/slider/#API',
  {
    autoFocus: {
      type: 'boolean',
      description: 'get focus when component mounted',
      defaultValue: 'false',
    },

    defaultValue: {
      type: 'number|number[]',
      description:
        'The default value of slider. When range is false, use number, otherwise, use [number, number]',
      defaultValue: '0 or [0, 0]',
    },

    disabled: {
      type: 'boolean',
      description: 'If true, the slider will not be interactable.',
      defaultValue: 'false',
    },

    dots: {
      type: 'boolean',
      description: 'Whether the thumb can drag over tick only.',
      defaultValue: 'false',
    },

    included: {
      type: 'boolean',
      description:
        'Make effect when marks not null, true means containment and false means coordinative',
      defaultValue: 'true',
    },

    marks: {
      type: 'object',
      description:
        'Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style.',
      defaultValue:
        '{ number: string|ReactNode } or { number: { style: object, label: string|ReactNode } }',
    },

    max: {
      type: 'number',
      description: 'The maximum value the slider can slide to',
      defaultValue: '100',
    },

    min: {
      type: 'number',
      description: 'The minimum value the slider can slide to',
      defaultValue: '0',
    },

    range: {
      type: 'boolean',
      description: 'dual thumb mode',
      defaultValue: 'false',
    },

    step: {
      type: 'number|null',
      description:
        'The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null.',
      defaultValue: '1',
    },

    tipFormatter: {
      type: 'Function|null',
      description:
        'Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null.',
      defaultValue: 'IDENTITY',
    },

    value: {
      type: 'number|number[]',
      description:
        'The value of slider. When range is false, use number, otherwise, use [number, number]',
    },

    vertical: {
      type: 'boolean',
      description: 'If true, the slider will be vertical.',
      defaultValue: 'false',
    },

    onAfterChange: {
      type: 'Function(value)',
      description: 'Fire when onmouseup is fired.',
    },

    onChange: {
      type: 'Function(value)',
      description:
        "Callback function that is fired when the user changes the slider's value.",
    },

    tooltipVisible: {
      type: 'boolean',
      description:
        'If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.',
    },
  },
];
