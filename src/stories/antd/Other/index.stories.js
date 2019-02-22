import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './Divider/index';
import '../../../style/index.less';

storiesOf('Ant Design/Other', module)
  .add('Divider', () => <Divider />);
