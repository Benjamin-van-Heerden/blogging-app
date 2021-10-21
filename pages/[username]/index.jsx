import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import MetaTags from "../../components/MetaTags"

export async function getServerSideProps({ query }) {
    const { username } = query;

    const userDoc = await getUserWithUsername(username);

    if (!userDoc) {
        return {
            notFound: true,
        };
    }

    // JSON serializable data
    let user = null;
    let posts = null;

    if (userDoc) {
        user = userDoc.data();
        const postsQuery = userDoc.ref
            .collection("posts")
            .where("published", "==", true)
            .orderBy("createdAt", "desc")
            .limit(5);
        posts = (await postsQuery.get()).docs.map(postToJSON);
    }

    return {
        props: { user, posts }, // will be passed to the page component as props
    };
}

export default function UserProfilePage({ user, posts }) {
    return (
        <main>
            <MetaTags title={user.username + "'s Homepage"} description={"Posts made by " + user.displayName} image={user.photoURL} />
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </main>
    );
}
