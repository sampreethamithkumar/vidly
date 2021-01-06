import React from "react";
// import PropTypes from "prop-types";

const ListGroup = (props) => {
  const {
    items,
    onItemSelect,
    selectedGenre,
    textProperty,
    valueProperty,
  } = props;

  return (
    <ul style={{ padding: "100px 0px 0px 0px" }} className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// This is not working.
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
