import React from "react";

function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="text-gray-500">Комментариев пока нет.</p>;
  }

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <p className="text-sm font-semibold">{comment.author}</p>
          <p>{comment.content}</p>
          <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;