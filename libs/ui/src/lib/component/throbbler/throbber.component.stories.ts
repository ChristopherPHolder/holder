import { Meta } from '@storybook/angular';
import { ThrobberComponent } from './throbber.component';

export default {
  title: 'ThrobberComponent',
  component: ThrobberComponent
} as Meta<ThrobberComponent>;

export const Primary = {
  render: (args: ThrobberComponent) => ({
    props: args,
  }),
  args: {},
};
