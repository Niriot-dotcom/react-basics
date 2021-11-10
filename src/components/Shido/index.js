import React, { useEffect, useState } from "react";
import Github from "../Github";

function Shido() {
  const [info, setInfo] = useState();
  const [info1, setInfo1] = useState();
  let users = [
    {
      id: "niriot",
    },
    {
      id: "erickgtzh",
    },
  ];

  const handleAsync = async () => {
    users.map(async (user, index) => {
      const userInfo = await fetch(`https://api.github.com/users/${user.id}`);
      const userJson = await userInfo.json();
      //   console.log("the info is: ", info);
      if (index === 0) {
        setInfo(userJson);
      } else if (index === 1) {
        setInfo1(userJson);
      } else {
      }
    });
  };

  useEffect(() => {
    // console.log("Welcome!");
    handleAsync();
  }, []);

  return (
    <>
      <Github info={info} />
      <Github info={info1} />
    </>
  );
}

export default Shido;
