import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import fetchData from "./utils/fetchData";
import Loader from "./components/Loader";

function CardDisplayerApp() {
  const [posts, setPosts] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    async function callFetchData() {
      setShowLoader(true);
      const result = await fetchData();
      setPosts(result);
      setShowLoader(false);
    }

    callFetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold md:text-8xl">DummyJSON</h1>
        <p className="break-normal text-center text-sm font-normal md:text-lg">
          Get dummy/fake JSON data to use as placeholder in development or in
          prototype testing.
        </p>
        <Loader show={showLoader} />
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default CardDisplayerApp;
