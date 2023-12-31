import React from "react";
import { Link } from "react-router-dom";
import appWriteService from "../appwrite/config";
function PostCard({ $id, title, image }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-red-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={appWriteService.getFilePreview(image)} alt={title} />
        </div>
        <h2 className="text-xl font-bold text-black">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
