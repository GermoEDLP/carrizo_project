import React from "react";
import { capitalize } from "../helpers";

export const ListaItem = ({ item }) => {
  return <a className="list-group-item list-group-item-action">{capitalize(item.name)}</a>;
};
