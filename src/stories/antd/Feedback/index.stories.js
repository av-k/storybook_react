import React from 'react';
import { storiesOf } from '@storybook/react';

import Al from './Alert/index';
import Modal from './Modal/index';
import Message from './Message/index';
import Notification from './Notification/index';
import Progress from './Progress/index';
import Popconfirm from './Popconfirm/index';
import Spin from './Spin/index';
import '../../../style/index.less';

storiesOf('Ant Design/Feedback', module)
  .add('Alert', () => <Al />)
  .add('Modal', () => <Modal />)
  .add('Message', () => <Message />)
  .add('Notification', () => <Notification />)
  .add('Progress', () => <Progress />)
  .add('Popconfirm', () => <Popconfirm />)
  .add('Spin', () => <Spin />);
