<script lang="ts">
	
import Calculator from "$lib/calculator/Calculator.svelte";
</script>

<svelte:head>
	<title>MEpoch</title>
	<meta name="description" content="Time since your epoch" />
</svelte:head>

<div class="main">
	<Calculator/>
</div>

<style>
	.main {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>
