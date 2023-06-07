<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
let parentInfo=[];
let sortedParentInfo=[];
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
});


</script>






<div id = "login-box">The Mohawks were based in the Mohawk valley and noted for their fur trading and their access to trade between the Iroquois and other nations.[16] The Mohawk became strong trading partners with the Dutch and English. It is likely that the Albany area was visited by European fur traders perhaps as early as 1540, but the extent and duration of those visits are unclear.[17]</div>
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


<style>
h2.gpBoxTitle{
    font-size: 22px; 

    font-weight: bolder;
    line-height: 28px;
    letter-spacing: 0;
    font-family: Arial, Verdana, Helvetica, sans-serif;
    text-transform: none;
    background: none transparent;
    margin: 0;
    padding-bottom: 7px;
    padding-top: 10px;
    display: block;
    color: #CA001B;
    visibility: visible;
}
h3.gpBoxTitle2{
    color: #C9021D;
    outline: 0;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
#paragraph{
margin-bottom: 20px;
}

#contentOutline{
    padding: 19px !important;
    padding-top: 10px !important;
    line-height: 20px;
    margin: 0 325px 20px 0;
    background: transparent;
    border: none;
    position: relative;
    z-index: 5;
}

#login-box{
box-sizing: content-box;
    position: relative;
    z-index: 6;
    float: right;
    width: 300px;
    border-left: 1px solid #d2d3d6;
    margin: 10px 0 0 0;
    padding: 0 5px 0 10px;

}
</style>