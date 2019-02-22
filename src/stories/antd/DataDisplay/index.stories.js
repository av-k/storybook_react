import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar/index';
import Badge from './Badge/index';
import Calendar from './Calendar/index';
import Card from './Card/index';
import Collapse from './Collapse/index';
import Carousel from './Carousel/index';
import List from './List/index';
import Table from './Table/index';
import Tabs from './Tabs/index';
import Timeline from './Timeline/index';
import '../../../style/index.less';

storiesOf('Ant Design/Data Display', module)
  .add('Avatar', () => <Avatar />)
  .add('Badge', () => <Badge />)
  .add('Calendar', () => <Calendar />)
  .add('Card', () => <Card />)
  .add('Collapse', () => <Collapse />)
  .add('Carousel', () => <Carousel />)
  .add('List', () => <List />)
  .add('Table', () => <Table />)
  .add('Tabs', () => <Tabs />)
  .add('Timeline', () => <Timeline />);
