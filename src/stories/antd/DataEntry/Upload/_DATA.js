export const CommonProps = {
	accept: {
		type: 'string',
		description: 'File types that can be accepted. See input accept Attribute',
	},

	action: {
		type: 'string|(file) => Promise',
		description: 'Uploading URL',
	},

	directory: {
		type: 'boolean',
		description: 'support upload whole directory',
	},

	beforeUpload: {
		type: '(file, fileList) => boolean | Promise',
		description: 'Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. Warning：this function is not supported in IE9',
	},

	customRequest: {
		type: 'Function',
		description: 'override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest',
	},

	data: {
		type: 'object|function(file)',
		description: 'Uploading params or function which can return uploading params.',
	},

	defaultFileList: {
		type: 'object[]',
		description: 'Default list of files that have been uploaded.',
	},

	disabled: {
		type: 'boolean',
		description: 'disable upload button',
	},

	fileList: {
		type: 'object[]',
		description: 'List of files that have been uploaded (controlled). Here is a common issue #2423 when using it',
	},

	headers: {
		type: 'object',
		description: 'Set request headers, valid above IE10.',
	},

	listType: {
		type: 'string',
		description: 'Built-in stylesheets, support for three types: text, picture or picture-card',
	},

	multiple: {
		type: 'boolean',
		description: 'Whether to support selected multiple file. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true',
	},

	name: {
		type: 'string',
		description: 'The name of uploading file',
	},

	showUploadList: {
		type: 'Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }',
		description: 'Whether to show default upload list, could be an object to specify showPreviewIcon and showRemoveIcon individually',
	},

	supportServerRender: {
		type: 'boolean',
		description: 'Need to be turned on while the server side is rendering',
	},

	withCredentials: {
		type: 'boolean',
		description: 'ajax upload with cookie sent',
	},

	openFileDialogOnClick: {
		type: 'boolean',
		description: 'click open file dialog',
	},

	onChange: {
		type: 'Function',
		description: 'A callback function, can be executed when uploading state is changing',
	},

	onPreview: {
		type: 'Function(file)',
		description: 'A callback function, will be executed when file link or preview icon is clicked',
	},

	onRemove: {
		type: 'Function(file): boolean | Promise',
		description: 'A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject',
	},

}