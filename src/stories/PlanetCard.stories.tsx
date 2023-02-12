import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlanetCard from "./PlanetCard";

export default {
  title: "Planet/PlanetCard",
  component: PlanetCard,
} as ComponentMeta<typeof PlanetCard>;

const Template: ComponentStory<typeof PlanetCard> = (args) => (
  <PlanetCard {...args} index={1} />
);

export const Terre = Template.bind({});
Terre.args = {
  planet: {
    id: "terre",
    name: "La Terre",
    englishName: "earth",
  },
};

export const Saturne = Template.bind({});
Saturne.args = {
  planet: {
    id: "saturne",
    name: "Saturne",
    englishName: "saturn",
  },
};
