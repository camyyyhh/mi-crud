import React from "react";

function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      <span>{item.value}</span>

      <div className="botones">
        <button
          className="editar"
          onClick={() => editItem(item)}
        >
          Editar
        </button>

        <button
          className="eliminar"
          onClick={() => deleteItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;