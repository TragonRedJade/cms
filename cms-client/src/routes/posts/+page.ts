// EXAMPLE Server-Side Rendering: Grab records from the database BEFORE the page loads
// 
// https://kit.svelte.dev/docs/load#making-fetch-requests

export async function load({fetch}) {
    const res = await fetch('http://127.0.0.1:1337/api/posts');
    const response = await res.json();
    
    // What is returned here will populate a prop named `data` on the corresponding `+page.svelte`
    return {posts: response.data};
}