import React from "react";
import { ChevronRight } from "@sexyicons/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Icons/ChevronRight",
  component: ChevronRight,

  argTypes: {
    set: {
      options: ["line", "solid", "lineal", "bulk"],
      control: { type: "select", defaultValue: "line" },
    },
    color: { control: "color" },
    secondaryColor: { control: "color" },
  },

  decorators: [
    withA11y,
    (Story) => (
      <div
        style={{
          maxWidth: "100vh",
          height: "15vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof ChevronRight>;

ChevronRight.displayName = "ChevronRight";
const Template: ComponentStory<typeof ChevronRight> = (args) => (
  <ChevronRight {...args} />
);

export const Lines = Template.bind({});
Lines.args = {
  set: "line",
};
Lines.parameters = {
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};

export const Solid = Template.bind({});
Solid.args = {
  set: "solid",
};
Solid.parameters = {
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};

export const Lineal = Template.bind({});
Lineal.args = {
  set: "lineal",
};
Lineal.parameters = {
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};

export const Bulk = Template.bind({});
Bulk.args = {
  set: "bulk",
};
Bulk.parameters = {
  docs: {
    source: {
      excludeDecorators: true,
    },
  },
};
