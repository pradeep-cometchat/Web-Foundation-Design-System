import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Add Members",
  component: InfoSelectionDialog,
  parameters: { layout: "centered" },
  decorators: [(Story) => <Inline><Story /></Inline>],
};
export default meta;
type Story = StoryObj<typeof InfoSelectionDialog>;

function Inline({ children }: { children: React.ReactNode }) {
  return (
    <div className="dialog-story-inline">
      <style>{`.dialog-story-inline .info-dialog__overlay { position: relative !important; inset: unset !important; background: transparent !important; z-index: unset !important; }`}</style>
      {children}
    </div>
  );
}

const MEMBERS = [
  { name: "George Alan", status: "Online" },
  { name: "Tessa Johnson", status: "Last seen 2h ago" },
  { name: "John Smith", status: "Online" },
  { name: "Sophia Williams", status: "Last seen 1d ago" },
  { name: "Michael Brown", status: "Online" },
  { name: "Safiya Ahmed", status: "Last seen 30m ago" },
  { name: "Emma Davis", status: "Online" },
  { name: "Robert Wilson", status: "Last seen 5h ago" },
];

export const Default: Story = {
  args: {
    variant: "addMembers",
    members: MEMBERS,
  },
};

export const WithSelection: Story = {
  args: {
    variant: "addMembers",
    members: MEMBERS.map((m, i) => ({ ...m, selected: i < 3 })),
  },
};

export const Playground: Story = {
  args: {
    variant: "addMembers",
    open: true,
    members: MEMBERS,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
  },
};
