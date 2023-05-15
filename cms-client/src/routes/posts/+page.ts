export async function load({fetch}) {
    const res = await fetch('http://127.0.0.1:1337/api/posts');
    const response = await res.json();
    return {posts: response.data};
}