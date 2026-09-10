import PropTypes from "prop-types";

// TODO: This component still assumes the OLD flat response shape.
// Fix it to read the nested Prisma include response from the API:
//   thread.author?.name
//   thread.author?.avatarUrl
//   thread._count?.comments
// Also add fallback UI so author-less seeded rows do not crash.
export default function ThreadItem({ thread }) {
  return (
    <li className="thread">
      <div className="thread-top">
        <img className="avatar" src="/placeholder-avatar.svg" alt="placeholder" />

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">by {thread.author?.name || "Anonymous"}</p>
        </div>

        <span className="badge">{thread._count?.comments??0} replies</span>
      </div>

      <p>{thread.body}</p>
    </li>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorName: PropTypes.string,
    commentCount: PropTypes.number,
  }).isRequired,
};
