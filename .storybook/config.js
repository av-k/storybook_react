import { configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.js$/);
const load = () => req.keys().forEach(req);

configure(load, module);
