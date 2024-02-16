import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Balvant4")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="github text-center m-4 bg-slate-700 text-white text-3xl  p-4">
        Github Followers: {data.followers}
        <img
          className=" mt-10"
          src={data.avatar_url}
          alt="Git Picture"
          width={400}
        />
      </div>
    </>
  );
};

export default Github;
