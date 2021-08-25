import React, { useEffect, useState } from "react";

const Tabs = ({ type, setType }) => {
  const [resourceType, setResourceType] = useState(type || "posts");

  if (type) {
  }

  useEffect(() => {
    console.log("Se renderizó el componente");
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    /**Se ejecuta la lógica dentro del return cuando el componente de desmonta */
    return (()=>{
      console.log('Se desmontó el componente')
    })
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>POSTS</button>
        <button onClick={() => setResourceType("users")}>USERS</button>
        <button onClick={() => setResourceType("comments")}>COMMENTS</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};

export default Tabs;
