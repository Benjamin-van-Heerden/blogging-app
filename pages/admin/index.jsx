import AuthCheck from "../../components/AuthCheck";

export default function AdminPostsPage({}) {
    return (
        <main>
            <AuthCheck>
                <p>something</p>
            </AuthCheck>
        </main>
    );
}
