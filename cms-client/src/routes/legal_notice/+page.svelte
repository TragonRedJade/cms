<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
let loginForm=[];
let content=[];
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
try {
        const res = await fetch("http://localhost:1337/api/legal-notices", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        content = res.data
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
{#each content as iteration, loop}
{#each content as info}
{#if info.id==loop+1}

<div id = "paragraph">
{@html info.attributes.html}
</div>

{/if}
{/each}
{/each}

</div>