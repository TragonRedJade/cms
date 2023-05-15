<script>
	import { goto } from '$app/navigation';

	export async function loadPosts() {
		const res = await fetch('http://localhost:1337/api/posts');
		const response = await res.json();
		return response.data;
	}
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful blog</h1>
</div>
<div class="container mx-auto mt-4">
	{#await loadPosts()}
		<p>Loading...</p>
	{:then posts}
		{#each posts as post}
			<div
				class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
				on:click={() => goto('/blog/' + post.id)}
			>
				<h4 class="font-bold">{post.attributes.Title}</h4>
				<p class="mt-2 text-gray-800">{post.attributes.created_at}</p>
			</div>
		{/each}
	{/await}
</div>
