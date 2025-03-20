function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  // items = [];

  //1)
  // if (items.length === 0) {
  //   return (
  //   <>
  //     <h1>No items List</h1>
  //     <p>nothing</p>
  //   </>
  //   );
  // }

  //3)
  //const message = items.length === 0 ? <p>There are no items in the list</p> : null

  // const getMessage = () => {
  //     return items.length === 0 ? <p>There are no items in the list</p> : null
  // }
  return (
    <>
      <h1>List</h1>
      {/* 2) */}
      {/* {items.length === 0 ? <p>There are no items in the list</p> : null} */}
      {/* 3) */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => console.log(item)}
            key={item}
            className="list-group-item "
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
