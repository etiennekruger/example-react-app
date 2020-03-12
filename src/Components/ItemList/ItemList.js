import React, { useContext } from "react";

import { ApiContext } from "Contexts/Api";

export default function ListItems(props) {
  const api = useContext(ApiContext);
  const items = api.getItems().map(item => <li key={item.id}>{item.name}</li>);

  return <ul>{items}</ul>;
}
