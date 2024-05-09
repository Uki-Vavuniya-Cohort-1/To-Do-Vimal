import React, { useState, useEffect } from "react";
export default function Hooks() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h3>{resourceType}</h3>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}