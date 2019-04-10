export const CarouselProps = [
  'https://ant.design/components/carousel/#API',
  {
    afterChange: {
      type: 'function(current)',
      description: 'Callback function called after the current index changes',
    },

    autoplay: {
      type: 'boolean',
      description: 'Whether to scroll automatically',
      defaultValue: 'false',
    },

    beforeChange: {
      type: 'function(from, to)',
      description: 'Callback function called before the current index changes',
    },

    dots: {
      type: 'boolean',
      description: 'Whether to show the dots at the bottom of the gallery',
      defaultValue: 'true',
    },

    easing: {
      type: 'string',
      description: 'Transition interpolation function name',
      defaultValue: 'linear',
    },

    effect: {
      type: 'scrollx | fade',
      description: 'Transition effect',
      defaultValue: 'scrollx',
    },

    vertical: {
      type: 'boolean',
      description: 'Whether to use a vertical display',
      defaultValue: 'false',
    },
  },
];

export const Methods = [
  'https://ant.design/components/carousel/#Methods',
  {
    'goTo(slideNumber, dontAnimate)': {
      type: 'function',
      description:
        'Go to slide index, if dontAnimate=true, it happens without animation',
    },

    'next()': {
      type: 'function',
      description: 'Change current slide to next slide',
    },

    'prev()': {
      type: 'function',
      description: 'Change current slide to previous slide',
    },
  },
];
