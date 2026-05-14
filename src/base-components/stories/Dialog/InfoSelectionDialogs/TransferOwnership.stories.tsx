import type { Meta, StoryObj } from "@storybook/react";
import { InfoSelectionDialog } from "../../../components/Dialog/InfoSelectionDialogs";

const meta: Meta<typeof InfoSelectionDialog> = {
  title: "Base Components/Dialog/Info Selection Dialogs/Transfer Ownership",
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
  { name: "Alex Mason", role: "Admin", selected: true, avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b73199c2-91b1-46e4-9849-b3fea799e498" },
  { name: "Andrew Joseph", role: "Admin", avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6beb722b-11db-4be8-9f1a-60157b76feb9" },
  { name: "Avery Quinn", role: "Moderator", avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5465792f-83e4-48ed-aeb1-81826c8b5637" },
  { name: "Brian Michael", avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f82649c4-8036-49c4-b556-7556fc5f13d0" },
  { name: "Cameron Lee", avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a512421-65ce-420c-8478-06396f493956" },
  { name: "Charles Dean", avatar: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc0d8a3-adc7-4d66-b3c2-8b5e71249852" },
];

export const Default: Story = {
  args: {
    variant: "transferOwnership",
    members: MEMBERS,
  },
};

export const NoSelection: Story = {
  name: "No Selection",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map((m) => ({ ...m, selected: false })),
  },
};

export const ModeratorSelected: Story = {
  name: "Moderator Selected",
  args: {
    variant: "transferOwnership",
    members: MEMBERS.map((m) => ({
      ...m,
      selected: m.name === "Avery Quinn",
    })),
  },
};

export const Playground: Story = {
  args: {
    variant: "transferOwnership",
    open: true,
    members: MEMBERS,
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
  },
};
