<script lang="ts">
	let birthInput;
	$: birthDate = new Date(birthInput);
	const interval = setInterval(()=> {
		birthDate = new Date(birthInput);
	}, 19);
	$: show = !!birthInput;
	$: miliseconds = new Date().getTime() - birthDate.getTime();
	$: seconds = Math.floor(miliseconds / 1000);
	$: minutes = Math.floor(seconds / 60);
	$: hours = Math.floor(miliseconds / 1000 / 60 / 60);
	$: days = miliseconds / 1000 / 60 / 60 / 24;
	$: weeks = miliseconds / 1000 / 60 / 60 / 24 / 7;
	$: months = miliseconds / 1000 / 60 / 60 / 24 / 7 / 4;
	$: years = miliseconds / 1000 / 60 / 60 / 24 / 365;
</script>

<div class="main">
	<h1>MEpoch</h1>
	<p>Enter your birth date below</p>
	<input type="date" bind:value={birthInput} />
	{#if show}
		<div class="results">
			<span>
				{miliseconds.toLocaleString()} miliseconds
			</span>
			<span>
				{seconds.toLocaleString()} seconds
			</span>
			<span>
				{minutes.toLocaleString()} minutes
			</span>
			<span>
				{hours.toLocaleString()} hours
			</span>
			<span>
				{days.toLocaleString()} days
			</span>
			<span>
				{years.toLocaleString()} years
			</span>
		</div>
	{/if}
</div>

<style>
	.main {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
		display: flex;
		flex-direction: column;
	}

	.results {
		display:flex;
		flex-direction: column;
		margin: 0.5em auto;
	}
	p {
		margin: 0.5em auto;
	}
	.results span {
		margin: 0.5em auto;
		color: var(--text-color)
	}

	input:focus-visible {
		box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
		color: var(--text-color);
	}

	.todo input {
		flex: 1;
		padding: 0.5em 2em 0.5em 0.8em;
		border-radius: 3px;
	}

	button {
		width: 2em;
		height: 2em;
		border: none;
		background-color: transparent;
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}
</style>
