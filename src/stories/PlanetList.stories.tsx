import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlanetCard from "./PlanetCard";
import PlanetList from "./PlanetList";

export default {
  title: "Planet/PlanetList",
  component: PlanetList,
} as ComponentMeta<typeof PlanetList>;

const Template: ComponentStory<typeof PlanetList> = (args) => (
  <PlanetList {...args} searchedResults="" searchText="" />
);

export const TwoElements = Template.bind({});
TwoElements.args = {
  bodies: [
    {
      id: "terre",
      name: "La Terre",
      englishName: "earth",
    },
    {
      id: "saturne",
      name: "Saturne",
      englishName: "saturn",
    },
  ],
};

export const ManyElements = Template.bind({});
ManyElements.args = {
  bodies: [
    { id: "jupiter", name: "Jupiter", englishName: "Jupiter" },
    { id: "terre", name: "La Terre", englishName: "Earth" },
    { id: "mars", name: "Mars", englishName: "Mars" },
    { id: "mercure", name: "Mercure", englishName: "Mercury" },
    { id: "neptune", name: "Neptune", englishName: "Neptune" },
    { id: "saturne", name: "Saturne", englishName: "Saturn" },
    { id: "uranus", name: "Uranus", englishName: "Uranus" },
    { id: "venus", name: "Vénus", englishName: "Venus" },
  ],
};
