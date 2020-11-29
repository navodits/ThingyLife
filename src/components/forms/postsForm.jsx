import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { getPost, savePost } from "../../services/postsService";
import { getCurrentUser } from "../../services/authService";

class PostForm extends Form {
  state = {
    data: {
      title: "",
      content: "",
    },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    content: Joi.string().required().label("Content"),
  };

  async populatePosts() {
    try {
      const postId = this.props.match.params.id;
      if (postId === "new") return;
      const { data: post } = await getPost(postId);
      this.setState({ data: this.mapData(post) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populatePosts();
  }

  doSubmit = async () => {
    const user = getCurrentUser();
    const body = { ...this.state.data, user_id: user.email };
    await savePost(body);

    this.props.history.push("/thingsHappend");
  };

  mapData(post) {
    return {
      _id: post._id,
      title: post.title,
      content: post.content,
    };
  }

  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("content", "Content", undefined, true)}
          {this.rendreButton("Save")}
        </form>
      </div>
    );
  }
}

export default PostForm;
