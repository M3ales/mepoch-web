<script lang="ts">
import Calculator from "../lib/calculator/Calculator.svelte";
</script>

<svelte:head>
	<title>MEpoch</title>
	<meta name="description" content="Generate an unix-style epoch timestamp for yourself" />
</svelte:head>

<section>
	<Calculator/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
