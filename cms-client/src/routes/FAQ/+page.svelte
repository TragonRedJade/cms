<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
let faqs=[];
let loginForm=[];
onMount(async () => {
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
    return parseJSON(resp).then((resp) => {
      throw resp;
    });
  };
  const headers = {
    'Content-Type': 'application/json',
  };

    try {
        const res = await fetch("http://localhost:1337/api/faqs", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        faqs = res.data
    } catch (e) {
        error = e
    }
 try {
        const res2 = await fetch("http://localhost:1337/api/login-forms", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        loginForm = res2.data
    } catch (e) {
        error = e
    }
});

</script>
<link rel = "stylesheet" href = "http://localhost:1337/uploads/loginform_f74fe7510a.css">

{#each loginForm as form}
{@html form.attributes.html}
{/each}

<div id = "contentOutline">
{#each faqs as iteration, loop}
{#each faqs as info}
{#if info.id==loop+1}
{#if loop==0}
<h2 class="gpBoxTitle">{@html info.attributes.Header}</h2>
<br>
{:else}
<h3 class="gpBoxTitle2">{@html info.attributes.Header}</h3>
{/if}


<div id = "paragraph">
{@html info.attributes.Paragraph}
</div>

{/if}
{/each}
{/each}

</div>


