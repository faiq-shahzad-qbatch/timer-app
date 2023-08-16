import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import fetchData from "./utils/fetchData";

function CardDisplayerApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function callFetchData() {
      setPosts(await fetchData());
    }

    callFetchData();
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col items-center overflow-y-scroll bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Card Displayer App</h1>
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default CardDisplayerApp;
