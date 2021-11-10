import React from "react";

function Github(props) {
  const { info } = props;
  const imgStyle = {
    borderRadius: "50%",
    minWidth: "25%",
    maxWidth: "25%",
    height: "auto",
    marginLeft: "30px",
    marginTop: "30px",
  };

  return (
    <>
      <img style={imgStyle} src={info?.avatar_url} />
      <h1 style={{ paddingLeft: "50px" }}>{info?.name}</h1>
      <h3 style={{ paddingLeft: "50px" }}>{info?.login}</h3>
    </>
  );
}

export default Github;
