import axios from "axios";

const createBlog = (blog) => ({
  type: "CREATE_BLOG",
  blog,
});

export const startCreateBlog = ({
  title = "",
  description = "",
  createdAt = "",
} = {}) => {
  return (dispatch) => {
    return axios({
      url: "http://localhost:3000/blogs",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtoken")}`,
      },
      data: {
        title,
        description,
        createdAt,
      },
    })
      .then((response) => {
        dispatch(createBlog(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deleteBlog = (id) => {
  return {
    type: "DELETE_BLOG",
    id,
  };
};

const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs,
});

export const startSetBlogs = () => {
  return (dispatch) => {
    return axios({
      url: "http://localhost:3000/blogs",
      method: "GET",
    })
      .then((response) => {
        dispatch(setBlogs(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
