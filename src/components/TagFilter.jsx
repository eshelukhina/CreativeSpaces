import React from "react";

function TagFilter({ allTags, selectedTag, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 border rounded ${
          selectedTag === null ? "bg-blue-600 text-white" : "bg-white"
        }`}
      >
        Все
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-3 py-1 border rounded ${
            selectedTag === tag ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;