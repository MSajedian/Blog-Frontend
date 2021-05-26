import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import uniqid from "uniqid";
// import posts from "../../../data/posts.json";


export default class BlogList extends Component {
  state = { posts: [] }

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_BACKEND_API_URL
    console.log("url", `${apiUrl}/blogPosts`);
    const resp = await fetch(`${apiUrl}/blogPosts`,{
      headers:{
        Origin: process.env.REACT_APP_FRONTEND_API_URL
      }
    })
    const posts = await resp.json()
    this.setState({ posts: posts })
  }

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }} key={uniqid()}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
