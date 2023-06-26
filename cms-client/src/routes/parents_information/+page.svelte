<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
let parentInfo=[];
let sortedParentInfo=[];
let loginForm=[];
let error=null;
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
        const res = await fetch("http://localhost:1337/api/parents-informations", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        parentInfo = res.data
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
{#each parentInfo as iteration, loop}
{#each parentInfo as info}
{#if info.id==loop+10}
{#if loop==0}
<h2 class="gpBoxTitle">{info.attributes.Header}</h2>
<br>
{:else}
<h3 class="gpBoxTitle2">{info.attributes.Header}</h3>
{/if}
<div id = "paragraph">
{@html info.attributes.Paragraph}
</div>

{/if}
{/each}
{/each}

</div>


