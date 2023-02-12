export const getModelId = (id: string) => {
  switch (id) {
    case "jupiter":
      return "d252c96ae3de48d7968b1206522ba9f5";
    case "terre":
      return "41fc80d85dfd480281f21b74b2de2faa";
    case "mars":
      return "9c7bbc64d8c74acfa9ec344c0fc10e1a";
    case "mercure":
      return "32347fa4ec1a4987b71f461a401d91c4";
    case "neptune":
      return "947a405a0a4348f9a49ff4bd3ed3cc4b";
    case "saturne":
      return "8fb67d3defd74aaa880df3a08317e641";
    case "uranus":
      return "3c7240d7affd4a30aa581b5551c60066";
    case "venus":
      return "d497ce25553447f3b7b679110c85cfa1";

    default:
      console.log(`${id} planet not found.`);
      return "5027874f2afb4cfc9cd9bbabdd3f9acf";
  }
};
