export const AvatarProps = [
  'https://ant.design/components/avatar/#API',
  {
    icon: {
      type: 'the Icon type for an icon avatar, see Icon Component',
      description: 'the Icon type for an icon avatar, see Icon Component',
    },
    shape: {
      type: 'circle | square',
      description: 'the shape of avatar',
      defaultValue: 'circle',
    },

    size: {
      type: 'number | string: large small default',
      description: 'the size of the avatar',
      defaultValue: 'default',
    },

    src: {
      type: 'string',
      description: 'the address of the image for an image avatar',
    },

    srcSet: {
      type: 'string',
      description: 'a list of sources to use for different screen resolutions',
    },

    alt: {
      type: 'string',
      description:
        'This attribute defines the alternative text describing the image',
    },

    onError: {
      type: '() => boolean',
      description:
        'handler when img load error, return false to prevent default fallback behavior',
    },
  },
];
