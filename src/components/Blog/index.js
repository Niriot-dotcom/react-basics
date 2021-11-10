import { React } from "react";
import Title from "../Title";
import Content from "../Content";

function Blog(props) {
  const { titleTxt = "default title", contentTxt = "default content" } = props;

  return (
    <>
      <Title text={titleTxt} prop="hey" />
      <Content text={contentTxt} />
      <br />
    </>
  );
}

export default Blog;
