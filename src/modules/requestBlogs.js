import axios from 'axios';

const apiUrl = 'http:localhost:3000/v1/'

const fetchBlogs = async () => {
  let response = await axios.get(apiUrl + 'blogs')
  return response.data.blogs
}

export { fetchBlogs }