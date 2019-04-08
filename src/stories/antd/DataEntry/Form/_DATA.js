export const CommonProps = [
  'https://ant.design/components/form/#Form',
  {
    form: {
      type: 'object',
      description:
        'Decorated by Form.create() will be automatically set this.props.form property',
      defaultValue: 'n/a',
    },
    hideRequiredMark: {
      type: 'Boolean',
      description: 'Hide required mark of all form items',
      defaultValue: 'false',
    },
    labelAlign: {
      type: "'left' | 'right'",
      description: 'Label text align',
      defaultValue: "'right'",
    },
    labelCol: {
      type: 'object',
      description:
        'The layout of label. You can set span offset to something like {span: 3, offset: 12} or sm: {span: 3, offset: 12} same as with <Col>',
    },
    layout: {
      type: "'horizontal'|'vertical'|'inline'",
      description: 'Define form layout',
      defaultValue: "'horizontal'",
    },
    onSubmit: {
      type: 'Function(e:Event)',
      description:
        'Defines a function will be called if form data validation is successful.',
    },
    wrapperCol: {
      type: 'object',
      description: 'The layout for input controls, same as labelCol',
    },
    colon: {
      type: 'boolean',
      description: 'change default props colon value of Form.Item',
      defaultValue: 'true',
    },
  },
];

export const FormCreateOptions = [
  'https://ant.design/components/form/#Form.create(options)',
  {
    mapPropsToFields: {
      type: '(props) => ({ [fieldName]: FormField { value } })',
      description:
        'Convert props to field value(e.g. reading the values from Redux store). And you must mark returned fields with Form.createFormField. Please note that the form fields will become controlled components. Properties like errors will not be automatically mapped and need to be manually passed in.',
    },
    name: {
      type: 'string',
      description: 'Set the id prefix of fields under form',
    },
    validateMessages: {
      type: 'Object { [nested.path]: String }',
      description:
        "Default validate message. And its format is similar with newMessages's returned value",
    },
    onFieldsChange: {
      type: 'Function(props, fields)',
      description:
        "Specify a function that will be called when the fields (including errors) of a Form.Item gets changed. Usage example: saving the field's value to Redux store.",
    },
    onValuesChange: {
      type: '(props, changedValues, allValues) => void',
      description: 'A handler while value of any field is changed',
    },
    getFieldDecorator: {
      type: 'Two-way binding for form, please read below for details.',
      description: '',
    },
    getFieldError: {
      type: '	Function(name)',
      description: 'Get the error of a field.',
    },
    getFieldsError: {
      type: 'Function([names: string[]])',
      description:
        "Get the specified fields' error. If you don't specify a parameter, you will get all fields error.",
    },
    getFieldsValue: {
      type: 'Function([fieldNames: string[]])',
      description:
        "Get the specified fields values. If you don't specify a parameter, you will get all fields values.",
    },
    getFieldValue: {
      type: 'Function(fieldName: string)',
      description: 'Get the value of a field.',
    },
    isFieldsTouched: {
      type: '(names?: string[]) => boolean',
      description:
        "Check whether any of fields is touched by getFieldDecorator's options.trigger event",
    },
    isFieldTouched: {
      type: '(name: string) => boolean',
      description:
        "Check whether a field is touched by getFieldDecorator's options.trigger event",
    },
    isFieldValidating: {
      type: 'Function(name)',
      description: 'Check if the specified field is being validated.',
    },
    resetFields: {
      type: 'Function([names: string[]])',
      description:
        "Reset the specified fields value(to initialValue) and status. If you don't specify a parameter, all the fields will be reset.",
    },
    setFields: {
      type: '({ [fieldName]: {value: any, errors: [Error] }}) => void',
      description: 'Set value and error state of fields.',
    },
    setFieldsValue: {
      type: '({ [fieldName]: value }) => void',
      description:
        "Set the value of a field. (Note: please don't use it in componentWillReceiveProps, otherwise, it will cause an endless loop, reason)",
    },
    validateFields: {
      type: `(
	[fieldNames: string[]],
	[options: object],
	callback(errors, values)
) => void`,
      description:
        "Validate the specified fields and get theirs values and errors. If you don't specify the parameter of fieldNames, you will validate all fields.",
    },
    validateFieldsAndScroll: {
      type: 'same as validateFields',
      description:
        'This function is similar to validateFields, but after validation, if the target field is not in visible area of form, form will be automatically scrolled to the target field area.',
    },
  },
];

export const validateFields = [
  'https://ant.design/components/form/#validateFields/validateFieldsAndScroll',
  {
    'options.first': {
      type: 'boolean',
      description:
        'validateFields/validateFieldsAndScroll option. If true, every field will stop validation at first failed rule',
      defaultValue: 'false',
    },
    'options.firstFields': {
      type: 'String[]',
      description:
        'validateFields/validateFieldsAndScroll option. Those fields will stop validation at first failed rule',
      defaultValue: '[]',
    },
    'options.force': {
      type: 'boolean',
      description:
        'validateFields/validateFieldsAndScroll option. Should validate validated field again when validateTrigger is been triggered again',
      defaultValue: 'false',
    },
    'options.scroll': {
      type: 'Object',
      description:
        "validateFields/validateFieldsAndScroll option. Config scroll behavior of validateFieldsAndScroll, more: dom-scroll-into-view's config",
      defaultValue: '{}',
    },
  },
];

export const getFieldDecorator = [
  'https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters',
  {
    id: {
      type: 'string',
      description:
        'getFieldDecorator(id, options). The unique identifier is required. support nested fields format.',
    },
    'options.getValueFromEvent': {
      type: 'function(...args)',
      description:
        'getFieldDecorator(id, options). Specify how to get value from event or other onChange arguments',
      defaultValue: '(e): any',
    },
    'options.getValueProps': {
      type: 'function(value): any',
      description:
        'getFieldDecorator(id, options). Get the component props according to field value.',
      defaultValue: '(value): Object',
    },
    'options.initialValue': {
      type: '',
      description:
        'getFieldDecorator(id, options). You can specify initial value, type, optional value of children node. (Note: Because Form will test equality with === internally, we recommend to use variable as initialValue, instead of literal)',
      defaultValue: 'n/a',
    },
    'options.normalize': {
      type: 'function(value, prevValue, allValues): any',
      description:
        'getFieldDecorator(id, options). Normalize value to form component, a select-all example',
    },
    'options.preserve': {
      type: 'boolean',
      description:
        'getFieldDecorator(id, options). Keep the field even if field removed',
    },
    'options.rules': {
      type: 'object[]',
      description:
        'getFieldDecorator(id, options). Includes validation rules. Please refer to "Validation Rules" part for details.',
      defaultValue: "'onChange'",
    },
    'options.trigger': {
      type: 'string',
      description:
        'getFieldDecorator(id, options). When to collect the value of children node',
    },
    'options.validateFirst': {
      type: 'boolean',
      description:
        'getFieldDecorator(id, options). Whether stop validate on first rule of error for this field.',
      defaultValue: 'false',
    },
    'options.validateTrigger': {
      type: 'string|string[]',
      description:
        'getFieldDecorator(id, options). When to validate the value of children node.',
      defaultValue: "'onChange'",
    },
    'options.valuePropName': {
      type: 'string',
      description:
        "getFieldDecorator(id, options). Props of children node, for example, the prop of Switch is 'checked'.",
      defaultValue: "'value'",
    },
  },
];

export const FormItem = [
  'https://ant.design/components/form/#Form.Item',
  {
    colon: {
      type: 'boolean',
      description: 'Used with label, whether to display : after label text.',
      defaultValue: 'true',
    },
    extra: {
      type: 'string|ReactNode',
      description:
        'The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time.',
    },
    hasFeedback: {
      type: 'boolean',
      description:
        'Used with validateStatus, this option specifies the validation status icon. Recommended to be used only with Input.',
      defaultValue: 'false',
    },
    help: {
      type: 'string|ReactNode',
      description:
        'The prompt message. If not provided, the prompt message will be generated by the validation rule.',
    },
    label: {
      type: 'string|ReactNode',
      description: 'Label text',
    },
    labelCol: {
      type: 'object',
      description:
        "The layout of label. You can set span offset to something like {span: 3, offset: 12} or sm: {span: 3, offset: 12} same as with <Col>. You can set on Form one time after 3.14.0. Will take FormItem's prop when both set with Form.",
    },
    required: {
      type: 'boolean',
      description:
        'Whether provided or not, it will be generated by the validation rule.',
      defaultValue: 'false',
    },
    validateStatus: {
      type: 'string',
      description:
        "The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating'",
    },
    wrapperCol: {
      type: 'object',
      description:
        "The layout for input controls, same as labelCol. You can set on Form one time after 3.14.0. Will take FormItem's prop when both set with Form.",
    },
  },
];

export const ValidationRules = [
  'https://ant.design/components/form/#Validation-Rules',
  {
    enum: {
      type: 'string',
      description: 'validate a value from a list of possible values',
    },
    len: {
      type: 'number',
      description: 'validate an exact length of a field',
    },
    max: {
      type: 'number',
      description: 'validate a max length of a field',
    },
    message: {
      type: 'string|ReactNode',
      description: 'validation error message',
    },
    min: {
      type: 'number',
      description: 'validate a min length of a field',
    },
    pattern: {
      type: 'RegExp',
      description: 'validate from a regular expression',
    },
    required: {
      type: 'boolean',
      description: 'indicates whether field is required',
      defaultValue: 'false',
    },
    transform: {
      type: 'function(value) => transformedValue:any',
      description: 'transform a value before validation',
    },
    type: {
      type: 'string',
      description: 'built-in validation type, available options',
      defaultValue: "'string'",
    },
    validator: {
      type: 'function(rule, value, callback)',
      description: 'custom validate function (Note: callback must be called)',
    },
    whitespace: {
      type: 'boolean',
      description:
        'treat required fields that only contain whitespace as errors',
      defaultValue: 'false',
    },
  },
];
