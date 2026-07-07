import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id
            ? { ...item, value }
            : item
        )
      );
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        {
          id: Date.now(),
          value,
          completed: false,
        },
      ]);
    }
  };

  const deleteItem = (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este elemento?"
    );

    if (confirmar) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteAll = () => {
    if (window.confirm("¿Esta seguro que desea eliminar todos los elementos?")) {
      setItems([]);
    }
  };

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>

      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />

      <input
        className="buscador"
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="barra-superior">
        <p>Total: {items.length}</p>

        <button
          className="borrarTodo"
          onClick={deleteAll}
        >
          Borrar Todo
        </button>
      </div>

      <List
        items={filteredItems}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;