<script>
//load footer content
export let footerNavLineCount=0;
  import './styles.css';
import { page } from '$app/stores';
import { onMount } from 'svelte';


let footerNav = [];
let error = null
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
        const res = await fetch("http://localhost:1337/api/Footer-navs", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        footerNav = res.data
    } catch (e) {
        error = e
    }
});





</script>

<footer>
<a href="/#"  title="EFS Panel"><img src = "http://localhost:1337/uploads/friends_and_neighbors_ftr_logo_dc7350264d.jpg" id="gpEfsMini"></a>
<div id="gpFootSub">
<div id="gpCopyright"></div>
<div id="gpSubNavigation">
{#each footerNav as footer, footerNavLineCount}
<ul id="gpSubNaviUl">
{#if footerNavLineCount==1}

 <li>
                  <a ui-sref='{footer.attributes.NavName}' href="{footer.attributes.Link}">{footer.attributes.NavName}</a>
                </li>
<br>
<br>
{:else}
                <li>
                  <a ui-sref='{footer.attributes.NavName}' href="{footer.attributes.Link}">{footer.attributes.NavName}</a>
                </li>

{/if}

</ul>


{/each}
</div>
</div>
<div class="hr"></div>
<div id="gpFootSubSub">
<script>
let test = 0;
</script>
            <p>
              © J&amp;JCI 2022. All rights reserved. The third party trademarks used herein are trademarks of their
              respective owners.
            </p>
<br>
            <p>
              This site is published by Johnson &amp; Johnson Consumer Inc. which is solely responsible for its content.
            </p>
<br>
            <p>This site is intended for residents of the US only.</p>

          </div>
<div id="gpFooter">
      <span id="gpBorderBL"></span>
      <span id="gpBorderBR"></span>
      <span id="gpFootBg"></span>
    </div>

<style>
#gpEfsMini {
    width: 237px;
    height: 42px;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: transparent;
position: absolute;
    left: 20px;
    top: 10px;
    
}

#gpFootSub {
    text-align: left;
    height: 18px;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 260px;

}

#gpFootSub div {
    position: relative;
    top: -15px;
    display: inline;
}
#gpCopyright {
    color: #999;
    font-size: 10px;
    float: right;
    padding-top: 0px;
    padding-right: 5px;
    padding-bottom: 0px;
    padding-left: 0px;
}
#gpSubNaviUl, 
#gpSubNaviUl li {
    display: inline;
    padding: 0;
    color: #666;
    font-size: 11px;
    margin: 0 12px 0 0;
}

#gpSubNaviUl li a {
    text-decoration: none;
    color: #C9021D;
    font-size: 11px;
}

.hr {
    background-image: url(http://localhost:1337/uploads/border_footer_fc0ae79c13.png);
    background-position-x: center;
    background-position-y: center;
    background-size: initial;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: transparent;
    width: 100%;
    height: 2px;
    clear: both;
    margin-top: 30px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
}

#gpFooter {
    position: relative;
    z-index: 1;
    clear: both;
    background-image: none;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}

#gpFootSubSub p {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    font-size: 9px;
    line-height: 12px;
    font-family: Arial, sans-serif;
    color: #666;
}





</style>
</footer>

