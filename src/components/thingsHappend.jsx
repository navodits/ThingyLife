import React, { Component } from "react";
import Lottie from "lottie-react";
import { getPosts, deletePost } from "../services/postsService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import PostsTable from "./postsTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import { toast } from "react-toastify";
import "./thingsHappend.css";
import Photographs from "./photographs";
import { getCurrentUser } from "../services/authService";
import ImageUploader from "./ImageUploader";
import { addPhoto, getPhotos } from "./../services/photosService";
import done from "../assets/animation/8580-done.json";

class ThingsHappend extends Component {
  state = {
    posts: [],
    photos: [],
    selectedPhoto: null,
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedFilter: "",
    sortColumn: { path: "title", order: "asc" },
    isPhotoAdded: false,
  };

  async componentDidMount() {
    const user = getCurrentUser();
    const { data: posts } = await getPosts(user.email);
    console.log(posts);
    const { data: photos } = await getPhotos(user.email);
    this.setState({ posts, photos });
  }

  handleAdd = async (e) => {
    const user = getCurrentUser();
    let formData = new FormData();
    formData.append("image", this.state.selectedPhoto);
    formData.append("user_id", user.email);
    console.log(user.email);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await addPhoto(formData, config);
      this.setState({
        isPhotoAdded: true,
        photos: [response.data, ...this.state.photos],
      });
    } catch (ex) {}
  };

  handleChooseFile = (e) => {
    this.setState({ selectedPhoto: e.target.files[0] });
  };

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
    const {
      currentPage,
      pageSize,
      posts: allPosts,
      sortColumn,
      searchQuery,
      isPhotoAdded,
      photos,
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

    return (
      <div>
        <Link to="thingsHappend/new">
          <button className="btn btn-primary">Add Post</button>
        </Link>
        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <div className="row">
          <div className="col-md-2">
            <ImageUploader
              onClick={this.handleAdd}
              onChange={(e) => {
                this.setState({ selectedPhoto: e.target.files[0] });
              }}
            />
            {photos.length !== 0 && <Photographs photos={this.state.photos} />}
          </div>
          <div className="col-md-2 animation">
            {isPhotoAdded && (
              <Lottie
                animationData={done}
                style={{ width: 100, height: 100 }}
                loop={false}
                onComplete={() => {
                  this.setState({ isPhotoAdded: false });
                  window.location = "/thingsHappend";
                }}
              />
            )}
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
