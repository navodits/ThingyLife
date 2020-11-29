import React from "react";
import { Link } from "react-router-dom";
import Star from "./common/star";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import "./table.css";

const PostsTable = (props) => {
  const { posts, onLike, onDelete, onSort, sortColumn } = props;

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (post) => (
        <Link to={`/thingsHappend/${post._id}`}>{post.title} </Link>
      ),
    },
    { path: "content", label: "Content" },
    { path: "postDate", label: "Date Posted" },
    {
      key: "like",
      content: (post) => (
        <Star onLiked={() => onLike(post)} liked={post.liked} />
      ),
    },
    {
      key: "delete",
      content: (post) => (
        <button
          onClick={() => onDelete(post)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={posts} columns={columns} />
      </table>
    </div>
  );
};

export default PostsTable;
