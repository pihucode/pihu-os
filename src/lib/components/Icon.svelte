<script>
	export let win;
	export let handleWindowOpen = () => {};
</script>

<div>
	<button on:dblclick={() => handleWindowOpen(win)}>{win.icon.name}</button>
</div>

<style></style>
