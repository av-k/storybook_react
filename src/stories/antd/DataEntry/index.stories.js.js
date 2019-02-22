import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplate from './AutoComplate/index';
import Checkbox from './Checkbox/index';
import DatePicker from './DatePicker/index';
import Form from './Form/index';
import InputNumber from './InputNumber/index';
import Input from './Input/index';
import Rate from './Rate/index';
import Radio from './Radio/index';
import Slider from './Slider/index';
import Switch from './Switch/index';
import Select from './Select/index';
import Upload from './Upload/index';
import '../../../style/index.less';

storiesOf('Ant Design/Data Entry', module)
  .add('AutoComplate', () => <AutoComplate />)
  .add('Checkbox', () => <Checkbox />)
  .add('DatePicker', () => <DatePicker />)
  .add('Form', () => <Form />)
  .add('InputNumber', () => <InputNumber />)
  .add('Input', () => <Input />)
  .add('Rate', () => <Rate />)
  .add('Radio', () => <Radio />)
  .add('Slider', () => <Slider />)
  .add('Switch', () => <Switch />)
  .add('Select', () => <Select />)
  .add('Upload', () => <Upload />);
