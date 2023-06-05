<script>
//load page content
import { page } from '$app/stores';
import { onMount } from 'svelte';
let Images = [];
let Cellulars=[];
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
        const res = await fetch("http://localhost:1337/api/image-carousels", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        Images = res.data
    } catch (e) {
        error = e
    }

 try {
        const res2 = await fetch("http://localhost:1337/api/cellular-contents", {
          method: "GET",
          headers: {
             'Content-Type': 'application/json'
          },
        }).then(checkStatus)
      .then(parseJSON);
        Cellulars = res2.data
    } catch (e) {
        error = e
    }

});

let index = 0;
let indicatorActive=0;
let count=0;
let rightClicked=false;
let leftClicked=false;
function next(){
rightClicked=true;
leftClicked=false;
if(index==(Images.length-1)){
index=0;
}else{
index++;
}
}

function previous(){
leftClicked=true;
rightClicked=false;
if(index==0){
index=(Images.length-1);
}else{
index--;
}


}
</script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<div id="slideshow-wrapper">
<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel ng-isolate-scope" ng-swipe-right="prev()" ng-swipe-left="next()" id="slideshow" uib-carousel="" active="activeSlide" interval="3000">
<div class="carousel-inner">
{#each Images as Image, count}
{#if count==index}
<img src = {Image.attributes.ImageLink} width="864" height="380" >
{#if leftClicked==true}
<button  on:click={previous}><div id ="previousActive"><span class="glyphicon glyphicon-chevron-left"></span></div></button>
{:else}
<button  on:click={previous}><div id ="previous"><span class="glyphicon glyphicon-chevron-left"></span></div></button>
{/if}

{#if rightClicked==true}
<button  on:click={next}><div id = "nextActive"><span class="glyphicon glyphicon-chevron-right"></span></div></button>

{:else}
<button  on:click={next}><div id = "next"><span class="glyphicon glyphicon-chevron-right"></span></div></button>

{/if}

{/if}
{/each}
</div>

</div>
</div>

<div id = "picturePadding"></div>

<div id = "indicatorsOutline"><center>
{#each Images as Image, count}
{#if count==index}
<div id = "IndicatorActive"></div>
{:else}
<button ><div id = "IndicatorInactive"></div></button>
{/if}
{/each}
</center></div>




<div id = "cellularContent">
<div style="padding-left: 20px;"></div>
{#each Cellulars as cell}
<div style = "width: 220px; padding-bottom: 15px;">
<img src='{cell.attributes.Image}' width="210" height="130">
<br>
<span class="gpBoxTitle">{cell.attributes.Header}</span>
<p style = "padding: 0;
		padding-top:10px;
    font-size: 12px;
    line-height: 19px;">
{@html cell.attributes.Description}
{#if cell.attributes.LinkName==null}
{:else}
<a href='{cell.attributes.Href}'>{cell.attributes.LinkName}</a>
{/if}
</p>
{#if cell.attributes.IsButton==true}
<a class="gpSubmit" href='{cell.attributes.ButtonLink}'>{cell.attributes.ButtonName}</a>
{/if}
</div>
{/each}
</div>


<style>
#picturePadding{
width: 100%;
height: 33px;
}
#slideshow-wrapper {
    width: 864px;
    height: 390px;
    text-align: center;
   
   
}

.carousel {
    position: relative;
}

.carousel-inner {
    position: relative;
    top:18px;
    left: 20px;
    width: 100%;
    overflow: hidden;


}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none;
}

#previous{
position: relative;
top:-195px;
left: -350px;
color: #C9021D;
font-size: 30px;
opacity: .5;
}

#next{
position: relative;
top:-195px;
left:350px;
color: #C9021D;
font-size: 30px;
opacity: .5;
}

#next:hover{
color: white;
opacity: 1;
}

#previous:hover{
color: white;
opacity: 1;
}

#previousActive{
position: relative;
top:-195px;
left: -350px;
color: white;
font-size: 30px;
opacity: 1;
}

#nextActive{
position: relative;
top:-195px;
left:350px;
color: white;
font-size: 30px;
opacity: 1;
}

#indicatorsOutline{
position: relative;
left: 173px;
top: -90px;
width: 518.39px;
height: 16px;

}

#IndicatorActive{
display: inline-block;
    width: 14px;
    height: 14px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000\9;
    background-color: white;
    border: 1px solid #fff;
    border-radius: 10px;
}

#IndicatorInactive{
display: inline-block;
    width: 12px;
    height: 12px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000\9;
    background-color: rgba(0,0,0,0);
    border: 1px solid #fff;
    border-radius: 10px;
}

.gpBoxTitle {
    color: #212121;
    font-size: 22px;
    font-weight: bolder;
}

a, a:visited, a:active, a:hover {
    color: #C9021D;
    outline: 0;
    text-decoration: underline;
}

#cellularContent{
 display: inline-block;
 display: flex;
            flex-direction: row;


}

.gpSubmit {
    padding: 10px 10px;
    text-align: center;
    display: inline-block;
    font-family: Arial, Verdana, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
    background: #C8102E;
    color: #fff !important;
    border: 0;
    cursor: pointer;
    text-decoration: none;
}



</style>











