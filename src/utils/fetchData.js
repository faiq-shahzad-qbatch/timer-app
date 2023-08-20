import _ from "lodash";
import axios from "axios";

export default async function fetchData() {
  const dataSources = ["users", "posts", "comments"];

  const [
    {
      data: { users },
    },
    {
      data: { posts },
    },
    {
      data: { comments },
    },
  ] = await axios.all(
    dataSources.map((source) =>
      axios.get(`https://dummyjson.com/${source}?limit=0`),
    ),
  );

  const countOfCommentsByPostId = _.countBy(comments, "postId");

  const usersKeyedById = _.keyBy(users, "id");

  const newPosts = posts.reduce(
    (acc, { id: postId, userId, title, body, reactions }) => {
      const { firstName, lastName, email } = usersKeyedById[userId];

      const post = {
        firstName,
        lastName,
        email,
        title,
        body,
        reactions,
        comments: countOfCommentsByPostId[postId],
      };

      acc.push(post);

      return acc;
    },
    [],
  );

  return newPosts;
}
