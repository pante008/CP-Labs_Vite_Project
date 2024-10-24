// ListItem.js
import React from 'react';

const ListItem = ({ title, author, publishYear }) => {
  return (
    <div className="list-item">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Publish Year: {publishYear}</p>
    </div>
  );
};

export default ListItem;
