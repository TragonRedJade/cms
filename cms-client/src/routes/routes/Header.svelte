<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';
export let currentTopNav='';
export let topNavHovering="";

let topNav = [];
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
        const res = await fetch("http://localhost:1337/api/Navigations", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        topNav = res.data
    } catch (e) {
        error = e
    }
});
</script>








<header>

        
    
          


<img src="http://localhost:1337/uploads/jandj_logo_a88a7a2763.jpg" width="163" height="62" id="gpLogo2" style="right: 7px; top: -152px">
<div id="gpWrapper2">
        <div id="gpHeader">
<a href="#"><img src="http://localhost:1337/uploads/friends_and_neighbors_logo_09fa39b2cf.jpg" alt="" width="620" height="120" id="gpLogo1"></a>
<nav>
	      <div id="gpNavigation">
		<div ng-include="'jj_nav_template'" class="ng-scope">
            <div id="gpNaviUlWrap" class="ng-scope">
		<ul  id="gpNaviUl">
				{#each topNav as nav}
				{#if $page.url.pathname==nav.attributes.link}
                        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined} data-ui-sref-active="gpActive" class="gpActive">

					<a href='{nav.attributes.link}'>{nav.attributes.NavName}  </a>

				
			</li>	
				{:else}
				
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                  
					<a href='{nav.attributes.link}'>{nav.attributes.NavName}</a>

				
			</li>	
				
	
                      {/if}
{/each}	
		</ul>
  	
		</div>
		</div>
		</div>
	
	</nav>
</div>

	    
</div>

        
	

	
</header>

<style>
#gpLogo2 {
    top: 0px;
    right: 40px;
    position: absolute;
    z-index: 5;
    box-shadow: #aaabae 0px 0px 5px;
}

#gpWrapper1 {
    
    border: 0px solid red;
    width: auto;
    position: relative;
    padding: 0;
    z-index: 2;
}


#gpWrapper {
    width: 934px;
    border: 0px solid #D6D6D6;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
#bodyWrapper {
    line-height: 1;
    font-family: Arial, Verdana, Helvetica, sans-serif;
    font-size: 14px;

    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: fixed;
    background-origin: initial;
    background-clip: initial;
    background-color: #dae0e5;
    padding-top: 150px;
    padding-right: 40px;
    padding-bottom: 0px;
    padding-left: 33px;
}
#gpWrapper2 {
    background: transparent url(/secure/images/jj/wrapper-right-bg.png) no-repeat right 70px;
    border: 0px solid blue;
    width: auto;
    position: relative;
    padding: 0;
    z-index: 3;
}


#gpHeader {
    height: 0;
    background: none;
    border: 0px solid black;
    margin: 0 18px;
    position: relative;
    z-index: 4;
}

#gpLogo1 {
    top: -121px;
    left: -13px;
    position: absolute;
    z-index: 5;
    box-shadow: #aaabae 0px 0px 5px;
    background: white;
}
#gpNavigation {
    margin: 0 16px;
    background: none;
    position: relative;
    z-index: 4;
    padding: 24px 0 0 0;
    border-bottom: 0px dotted #999;
}

#gpNaviUl {
    float: none;
    border-top: 1px solid #d5dce0;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 24;
}
#gpNaviUlWrap {
    background: none;
    height: 46px;
    position: relative;
    z-index: 20;
    padding: 0;
    margin-left: -30px;
}

#gpNaviUl li a {
    display: block;
    font-size: 14px;
    height: 20px;
    font-family: Arial, Verdana, Helvetica, sans-serif;
    font-weight: bold;
    text-transform: none;
    text-decoration: none;
    background: #C8102E;
    color: #F7F7F7;
    padding: 10px 30px 27px 30px;
    position: relative;
    z-index: 23;
    letter-spacing: 0;
    margin: 0 auto;
}

#gpNaviUl li {
    float: left;
    display: block;
    padding: 0;
    margin: 0 5px 0 0;
    position: relative;
    z-index: 22;
    box-sizing: content-box;
}


#gpNaviUl li.gpActive a {
    text-decoration: underline;
    margin: 0 auto -8px;
    padding-bottom: 34px;
    top: -7px;
    line-height: 19px;
}


#gpNaviUl a:hover {
position: relative;
    top:1px;
}
</style>








