import React from "react";

function Item({ item, deleteItem, editItem, toggleComplete }) {
  return (
    <li>
      <span className={item.completed ? "completado" : ""}>
        {item.value}
      </span>

      <div className="botones">
        <button
          className="completar"
          onClick={() => toggleComplete(item.id)}
        >
          Completar
        </button>

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