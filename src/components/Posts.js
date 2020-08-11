import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
  if(!syncPosts.length) {
    return <p className="text-center">No posts for now</p>
  }
  return syncPosts.map((post) => {
    return <Post post={post} key={post.id}></Post>;
  });
};

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
}
export default connect(mapStateToProps, null)(Posts);