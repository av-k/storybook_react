export const CommonProps = [
  'https://ant.design/components/modal/#API',
  {
    afterClose: {
      type: 'function',
      description:
        'Specify a function that will be called when modal is closed completely.',
    },

    bodyStyle: {
      type: 'object',
      description:
        'Body style for modal body element. Such as height, padding etc.',
      defaultValue: '{}',
    },

    cancelText: {
      type: 'string|ReactNode',
      description: 'Text of the Cancel button',
      defaultValue: 'Cancel',
    },

    centered: {
      type: 'Boolean',
      description: 'Centered Modal',
      defaultValue: 'false',
    },

    closable: {
      type: 'boolean',
      description:
        'Whether a close (x) button is visible on top right of the modal dialog or not',
      defaultValue: 'true',
    },

    confirmLoading: {
      type: 'boolean',
      description:
        'Whether to apply loading visual effect for OK button or not',
      defaultValue: 'false',
    },

    destroyOnClose: {
      type: 'boolean',
      description: 'Whether to unmount child components on onClose',
      defaultValue: 'false',
    },

    footer: {
      type: 'string|ReactNode',
      description:
        "Footer content, set as footer={null} when you don't need default buttons",
      defaultValue: 'OK and Cancel buttons',
    },

    forceRender: {
      type: 'boolean',
      description: 'Force render Modal',
      defaultValue: 'false',
    },

    getContainer: {
      type: '(instance): HTMLElement',
      description: 'Return the mount node for Modal',
      defaultValue: '() => document.body',
    },

    mask: {
      type: 'Boolean',
      description: 'Whether show mask or not.',
      defaultValue: 'true',
    },

    maskClosable: {
      type: 'boolean',
      description:
        'Whether to close the modal dialog when the mask (area outside the modal) is clicked',
      defaultValue: 'true',
    },

    maskStyle: {
      type: 'object',
      description: 'Style for modals mask element.',
      defaultValue: '{}',
    },

    okText: {
      type: 'string|ReactNode',
      description: 'Text of the OK button',
      defaultValue: 'OK',
    },

    okType: {
      type: 'string',
      description: 'Button type of the OK button',
      defaultValue: 'primary',
    },

    okButtonProps: {
      type: 'ButtonProps',
      description: 'The ok button props',
    },

    cancelButtonProps: {
      type: 'ButtonProps',
      description: 'The cancel button props',
    },

    style: {
      type: 'object',
      description:
        'Style of floating layer, typically used at least for adjusting the position.',
    },

    title: {
      type: 'string|ReactNode',
      description: "The modal dialog's title",
    },

    visible: {
      type: 'boolean',
      description: 'Whether the modal dialog is visible or not',
      defaultValue: 'false',
    },

    width: {
      type: 'string|number',
      description: 'Width of the modal dialog',
      defaultValue: '520',
    },

    wrapClassName: {
      type: 'string',
      description: 'The class name of the container of the modal dialog',
    },

    zIndex: {
      type: 'Number',
      description: 'The z-index of the Modal',
      defaultValue: '1000',
    },

    onCancel: {
      type: 'function(e)',
      description:
        'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button',
    },

    onOk: {
      type: 'function(e)',
      description:
        'Specify a function that will be called when a user clicks the OK button',
    },
  },
];

export const ModalMethodsObjectProps = [
  '',
  {
    autoFocusButton: {
      type: 'null|string: ok cancel',
      description: 'Specify which button to autofocus	',
      defaultValue: 'ok',
    },

    cancelText: {
      type: 'string',
      description: 'Text of the Cancel button',
      defaultValue: 'Cancel',
    },

    centered: {
      type: 'Boolean',
      description: 'Centered Modal',
      defaultValue: 'false',
    },

    className: {
      type: 'string',
      description: 'className of container',
    },

    content: {
      type: 'string|ReactNode',
      description: 'Content',
    },

    icon: {
      type: 'string|ReactNode',
      description: 'custom icon',
      defaultValue: '<Icon type="question-circle">',
    },

    iconType: {
      type: 'string',
      description: 'Icon type of the Icon component (deperated after 3.12.0)',
      defaultValue: 'question-circle',
    },

    keyboard: {
      type: 'Boolean',
      description: 'Whether support press esc to close',
      defaultValue: 'true',
    },

    mask: {
      type: 'Boolean',
      description: 'Whether show mask or not.',
      defaultValue: 'true',
    },

    maskClosable: {
      type: 'Boolean',
      description:
        '	Whether to close the modal dialog when the mask (area outside the modal) is clicked',
      defaultValue: 'false',
    },

    okText: {
      type: 'string',
      description: 'Text of the OK button',
      defaultValue: 'OK',
    },

    okType: {
      type: 'string',
      description: 'Button type of the OK button',
      defaultValue: 'primary',
    },

    okButtonProps: {
      type: 'ButtonProps',
      description: 'The ok button props',
    },

    cancelButtonProps: {
      type: 'ButtonProps',
      description: 'The cancel button props',
    },

    title: {
      type: 'string|ReactNode',
      description: 'Title',
    },

    width: {
      type: 'string|number',
      description: 'Width of the modal dialog',
      defaultValue: '416',
    },

    zIndex: {
      type: 'Number',
      description: 'The z-index of the Modal',
      defaultValue: '1000',
    },

    onCancel: {
      type: 'function',
      description:
        'Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed',
    },

    onOk: {
      type: 'function',
      description:
        'Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed',
    },
  },
];
