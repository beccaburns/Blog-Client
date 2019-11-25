import React, { Component } from "react";

class ListBlogs extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    fetchblogs().then(result => {
      this.setState({
        blogs:result
      })
    })
  }

  render() {
    let renderListBlogs
    const blogData = this.state.blogs
    let message

    if (blogData.length > 0) {
      renderListBlogs = blogData.map(blog => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.date}</p>
            <p>{blog.author}</p>
          </div>
        )
      })
    } else {
      message = (
        <Message style={{ color: 'red' }}>
          <Header
            as='p'
            id="message"
            style={{ color: 'green' }}>
            Oops! No blogs today.
        </Header>
        </Message>
      )
    }
    return (
      <>
        {renderListBlogs &&
          <div id="list">
            {renderListBlogs}
          </div>
        }
        {message}
      </>
    )
  }
}
export default ListBlogs;