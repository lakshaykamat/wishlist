import React from "react";
import "./styles.css";
import Input from "./Components/Input";
import ListContainer from "./Components/ListContainer";
export default function App() {
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event) {
    setInput(event.target.value);
  }
  function addToItem(e) {
     e.preventDefault();
    setItems((prevItems) => {
      const newItem = [...prevItems, input];
      return newItem;
    });
   document.getElementsByClassName('input')[0].value = ''
  }
  function onDelete(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }
  const itemJSX = items.map((item, index) => {
    return <ListContainer key={index} name={item} delete={onDelete} />;
  });
  return (
    <>
      <Input handleChange={handleChange} addToItem={addToItem} />
      {itemJSX}
    </>
  );
}
