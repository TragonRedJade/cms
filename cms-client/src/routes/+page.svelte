<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	/** @type {import('./$types').PageData} */  

	import { goto } from '$app/navigation';
	import defaultOptions from '../lib/utils/defaultOptions';
	export const load: Load = async ({ fetch }) => {	
		console.log("Hi");	
		const res = await fetch('http://127.0.0.1:1337/api/posts', defaultOptions);
		const response = await res.json();

		return { props: { posts: response.data } };
	};

</script>
<script lang="ts">
	export let posts: any;
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful blog</h1>
</div>
<div class="container mx-auto mt-4">
	{posts}
	<!-- {#each posts as post}
		<div
			class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
			on:click={() => goto('/blog/' + post.id)}
		> 
			<h4 class="font-bold">{post.attributes.title}</h4>
		</div>
	{/each} -->
	</div>