import type { Meta, StoryObj } from "@storybook/react";
import { FormDialog } from "../../../components/Dialog/FormDialogs";

const meta: Meta<typeof FormDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Join Group",
  component: FormDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof FormDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .form-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

export const Default: Story = {
  args: { variant: "joinGroup" },
};

export const WithPasswordVisible: Story = {
  name: "With Password Visible",
  args: { variant: "joinGroup" },
};

export const Playground: Story = {
  args: { variant: "joinGroup", open: true },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
  },
};
