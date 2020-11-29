import React, { Component } from "react";
import { getPosts, deletePost } from "../services/postsService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import PostsTable from "./postsTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import { toast } from "react-toastify";
import "./thingsHappend.css";
import Button from "./common/button";
import Photographs from "./photographs";
import { getCurrentUser } from "../services/authService";
import ImageUploader from "./ImageUploader";
class ThingsHappend extends Component {
  state = {
    posts: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedFilter: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const user = getCurrentUser();
    const response = await getPosts(user.email);
    console.log(response);
    const posts = response.data;
    this.setState({ posts });
  }

  handleLike = (post) => {
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...posts[index] };
    posts[index].liked = !posts[index].liked;
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p._id !== post._id);

    this.setState({ posts });

    try {
      await deletePost(post._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This post has already been deleted");
        this.setState({ posts: originalPosts });
      }
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedFilter: null, currentPage: 1 });
  };

  handleSelectedItem = (item) => {
    this.setState({ selectedFilter: item, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.posts;
    const {
      currentPage,
      pageSize,
      posts: allPosts,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allPosts;
    if (searchQuery) {
      filtered = allPosts.filter((post) =>
        post.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered =
        this.state.selectedFilter === "Liked"
          ? allPosts.filter((p) => p.liked === true)
          : allPosts;
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const posts = paginate(sorted, currentPage, pageSize);

    if (count === 0) {
      return <p>There are no posts in the database</p>;
    }
    return (
      <div>
        <Link to="thingsHappend/new">
          <button className="btn btn-primary">Add Post</button>
        </Link>
        <p> Showing {filtered.length} posts in the database.</p>
        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <div className="row">
          <div className="col-md-1">
            <ImageUploader />
            <Photographs />
          </div>
          <div className="col-md-6 container-posts">
            <PostsTable
              sortColumn={sortColumn}
              posts={posts}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              totalItems={filtered.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ThingsHappend;
