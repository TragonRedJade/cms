<script>
	import "../app.postcss";
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';

    import './styles.css';
</script>

<div class="app">
<head>

</head>
<body ng-app="portal" class="tundra" data-gr-c-s-loaded="true" cz-shortcut-listen="true" style="background-color: #dae0e5;">
      <ui-view></ui-view>
<div id="bodyWrapper">
<div id="gpWrapper">
<div id="gpWrapper1">

<Header></Header>
<div id = "pageOutline">
<div id = "page">

	<slot></slot>
	<main></main>

     <div id = "gpFoot">

	<Footer></Footer>

     </div>
</div>
</div>
</div>
</div>
</div>
</body>
</div>

<style>

</style>





