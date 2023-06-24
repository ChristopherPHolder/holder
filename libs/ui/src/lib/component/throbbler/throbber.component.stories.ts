import { Meta, StoryObj } from '@storybook/angular';
import { ThrobberComponent } from './throbber.component';

const meta: Meta<ThrobberComponent> = {
  title: 'Library/Components/Throbber',
  component: ThrobberComponent
}

export default meta;
type Story = StoryObj<ThrobberComponent>;

export const Fade: Story = {
  args: {
    visible: true
  }
}
