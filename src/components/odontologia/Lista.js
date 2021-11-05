import React from "react";
import { ListaItem } from "./ListaItem";

export const Lista = ({ odonto }) => {
  return (
    <div className="list-group">
      {odonto.map((item) => (
        <ListaItem key={item.id} item={item} />
      ))}
    </div>
  );
};
