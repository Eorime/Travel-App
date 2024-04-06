import React from "react";
import {
  Blog,
  BlogImage,
  BlogText,
  BlogsContainer,
  Container,
  Title,
} from "./style";
import { data } from "../../data/blogsData/data";

const Blogs = () => {
  return (
    <Container>
      <Title>Blogs</Title>
      <BlogsContainer>
        {data.map((blog, index) => (
          <Blog key={index}>
            <BlogImage src={blog.img} />
            <BlogText> {blog.text} </BlogText>
          </Blog>
        ))}
      </BlogsContainer>
    </Container>
  );
};

export default Blogs;
