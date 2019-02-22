import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonPage from './Button/index';
import IconPage from './Icon/index';
import '../../../style/index.less';

storiesOf('Ant Design/General', module)
  .add('Button', () => <ButtonPage />)
  .add('Icon', () => <IconPage />);
