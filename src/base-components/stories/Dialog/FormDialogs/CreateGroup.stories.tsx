import type { Meta, StoryObj } from "@storybook/react";
import { FormDialog } from "../../../components/Dialog/FormDialogs";

const meta: Meta<typeof FormDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Create Group",
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

export const PublicType: Story = {
  name: "Public (Default)",
  args: {
    variant: "createGroup",
    initialGroupType: "public",
  },
};

export const PrivateType: Story = {
  name: "Private",
  args: {
    variant: "createGroup",
    initialGroupType: "private",
  },
};

export const ProtectedType: Story = {
  name: "Protected (with Password)",
  args: {
    variant: "createGroup",
    initialGroupType: "protected",
  },
};

export const Playground: Story = {
  args: {
    variant: "createGroup",
    initialGroupType: "public",
    open: true,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    initialGroupType: {
      control: "select",
      options: ["public", "private", "protected"],
    },
    open: { control: "boolean" },
  },
};
