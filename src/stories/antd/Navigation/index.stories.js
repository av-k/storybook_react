import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from './Pagination/index';
import Steps from './Steps/index';
import '../../../style/index.less';

storiesOf('Ant Design/Navigation', module)
  .add('Pagination', () => <Pagination />)
  .add('Steps', () => <Steps />);
