import React, { useState } from "react";

const CommentsSection = ({ blogAssets }) => {
  const [formData, setFormData] = useState({ name: "", comment: "" });
  const [comments, setComments] = useState(blogAssets.comments || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      alert("Please fill in both name and comment.");
      return;
    }
    const newComment = {
      id: Date.now().toString(),
      name: formData.name,
      date: new Date().toISOString(),
      comment: formData.comment,
      likes: 0,
    };
    setComments((prev) => [newComment, ...prev]);
    setFormData({ name: "", comment: "" });
  };

  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="flex items-center space-x-4">
          <img 
            src="https://via.placeholder.com/48" 
            alt="User avatar placeholder" 
            className="w-12 h-12 rounded-full"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Write your comment here..."
          rows={4}
          className="w-full border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Comment
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.length === 0 && (
          <p className="text-gray-500">Be the first to comment!</p>
        )}
        {comments.map(({ id, name, date, comment, likes }) => (
          <div key={id} className="mb-6 border-b pb-4 flex space-x-4">
            <img
              src="https://via.placeholder.com/48"
              alt={`${name} avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{name}{" "}
                <span className="text-gray-400 text-sm">
                  ({new Date(date).toLocaleDateString()})
                </span>
              </p>
              <p className="mt-1">{comment}</p>
              <p className="text-sm text-gray-500 mt-2">Likes: {likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
