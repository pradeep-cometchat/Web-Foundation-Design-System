import type { Meta, StoryObj } from "@storybook/react";
import { LinkDialog } from "../../../components/LinkDialog";

const meta: Meta<typeof LinkDialog> = {
  title: "Base Components/Dialog/Form Dialogs/Link Dialog",
  component: LinkDialog,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof LinkDialog>;

export const Default: Story = {
  args: {
    open: true,
    showOverlay: false,
  },
};

export const WithPrefilledText: Story = {
  name: "With Prefilled Text",
  args: {
    open: true,
    showOverlay: false,
    initialText: "Click here to visit",
    initialUrl: "https://www.example.com",
  },
};

export const EditLink: Story = {
  name: "Edit Link",
  args: {
    open: true,
    showOverlay: false,
    title: "Edit Link",
    initialText: "CometChat Documentation",
    initialUrl: "https://www.cometchat.com/docs",
  },
};

export const CustomLabels: Story = {
  name: "Custom Labels",
  args: {
    open: true,
    showOverlay: false,
    title: "Insert Hyperlink",
    textPlaceholder: "Display text",
    urlPlaceholder: "Paste URL here",
    cancelLabel: "Discard",
    saveLabel: "Insert",
  },
};

export const Playground: Story = {
  args: {
    open: true,
    showOverlay: false,
    title: "Add Link",
    initialText: "",
    initialUrl: "",
    textPlaceholder: "Link",
    urlPlaceholder: "https://",
    cancelLabel: "Cancel",
    saveLabel: "Save",
  },
  parameters: { docs: { disable: true } },
  argTypes: {
    open: { control: "boolean" },
    showOverlay: { control: "boolean" },
    title: { control: "text" },
    initialText: { control: "text" },
    initialUrl: { control: "text" },
    textPlaceholder: { control: "text" },
    urlPlaceholder: { control: "text" },
    cancelLabel: { control: "text" },
    saveLabel: { control: "text" },
  },
};
