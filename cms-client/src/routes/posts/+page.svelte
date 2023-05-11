<script lang="ts" >
    export const prerender = true;
    // src/routes/posts.ts
	import defaultOptions from '../../lib/utils/defaultOptions';
    import type { EndpointOutput } from '@sveltejs/kit';
    export async function get(): Promise<EndpointOutput> {
        const res = await fetch('http://localhost:1337/api/posts?populate=*',defaultOptions);
        const data = await res.json();
        return { body: data };
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
        
    </h1>
</section>

<style>

</style>
