<script>
	// EXAMPLE Client-Side Rendering: Grab records from the database after the page loads

	// export async function loadPosts() {
	// 	const res = await fetch('http://localhost:1337/api/posts');
	// 	const response = await res.json();
	// 	return response.data;
	// }
</script>

<div class="container mx-auto mt-4">
	<a href="/posts"> Posts </a>

	<!-- EXAMPLE display records -->
	<!-- {#await loadPosts()}
		<p>Loading...</p>
	{:then posts}
		{#each posts as post}
			<h4 class="font-bold">{post.attributes.Title}</h4>
		{/each}
	{/await} -->
</div>
