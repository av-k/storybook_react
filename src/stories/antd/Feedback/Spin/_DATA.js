export const SpinProps = [
  'https://ant.design/components/spin/#API',
  {
    delay: {
      type: 'number (milliseconds)',
      description:
        'specifies a delay in milliseconds for loading state (prevent flush)',
      defaultValue: '',
    },

    indicator: {
      type: 'ReactElement',
      description: 'React node of the spinning indicator',
      defaultValue: '',
    },

    size: {
      type: 'string',
      description: 'size of Spin, options: small, default and large',
      defaultValue: 'default',
    },

    spinning: {
      type: 'boolean',
      description: 'whether Spin is spinning',
      defaultValue: 'true',
    },

    tip: {
      type: 'string',
      description: 'customize description content when Spin has children',
      defaultValue: '',
    },

    wrapperClassName: {
      type: 'string',
      description: 'className of wrapper when Spin has children',
      defaultValue: '',
    },
  },
];
