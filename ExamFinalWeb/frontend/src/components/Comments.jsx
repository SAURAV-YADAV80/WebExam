const Comments = ({ comments, video_id }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div key={comment._id} className="comment">
          <img src={comment.user.profilePicture} alt={comment.user.name} />
          <div className="comment-content">
            <h4>{comment.user.name}</h4>
            <p>{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;

export const CommentsDummyData = [
  {
    _id: "1",
    user: {
      _id: "1",
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/150"
    },
    text: "This is a comment."
  },
  {
    _id: "2",
    user: {
      _id: "2",
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/150"
    },
    text: "This is another comment."
  }
];