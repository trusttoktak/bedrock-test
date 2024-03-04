import React, { useState } from "react";
import { CommentProps } from "../type/postType";

export const Comment: React.FC<CommentProps> = ({
  initials,
  email,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleSeeMore = () => {
    setExpanded(!expanded);
  };

  const truncatedContent =
    content.length > 135 ? `${content.slice(0, 135)}...` : content;

  return (
    <div
      className="flex p-6 mb-4 mr-4 rounded-xl shadow-custom"
      style={{ flexDirection: "column" }}
    >
      <div className="flex items-center" style={{ flexDirection: "row" }}>
        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center text-white uppercase font-bold mr-3`}
          style={{ backgroundColor: initials.bgColor }}
        >
          {initials.text}
        </div>
        <div>
          <div className="text font-semibold">{email}</div>
        </div>
      </div>
      <div
        className="text-sm text-gray-600 pl-11"
        style={{
          ...(!expanded && { display: "flex" }),
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "1000px",
        }}
      >
        {expanded ? content : truncatedContent}
        {content.length > 135 && (
          <span
            className="text-blue-500 text-sm"
            style={{ cursor: "pointer" }}
            onClick={handleSeeMore}
          >
            {expanded ? "...See Less" : "See More"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Comment;
