import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3007/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:3007/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleClick}>Delete Blog</button>
    </div>
  );
};

export default BlogDetails;
