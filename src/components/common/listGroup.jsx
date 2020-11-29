import React from "react";

const ListGroup = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li
          onClick={() => props.onSelectItem(item)}
          key={item}
          className={
            item === props.selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
