import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, linkTo = null }) {
  const content = (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-2xl font-semibold mb-1">{post.title}</h3>
      <p className="text-gray-500 text-sm mb-3">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700">{post.content}</p>
      <div className="mt-3 text-sm text-gray-600">
        Теги: {post.tags.join(", ")}
      </div>
    </div>
  );

  return linkTo ? <Link to={linkTo}>{content}</Link> : content;
}

export default PostCard;