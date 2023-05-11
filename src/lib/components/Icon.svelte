<script>
	export let win;
	export let handleWindowOpen = () => {};
</script>

<div>
	<button on:dblclick={() => handleWindowOpen(win)} class="icon">
		<img src={win.icon.path} alt={win.icon.name} />
		{win.icon.name}
	</button>
</div>

<style>
	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 12px;
		color: white;

		padding: 8px;
		margin: 6px;
		background-color: transparent;
		border: none;
	}

	.icon:hover {
		cursor: pointer;
	}
</style>
