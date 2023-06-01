<script>
	import MoveableWindow from '$lib/components/MoveableWindow.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { allWindowsStore, openedWindowsStore } from '$lib/stores/windows';
	import { zStackWindows, addWindowToZStack } from '$lib/stores/windowZStack';

	const handleWindowOpen = (win) => {
		if (!$openedWindowsStore.includes(win)) {
			$openedWindowsStore = [...$openedWindowsStore, win];
		}
		addWindowToZStack(win.id);
	};
</script>

<div class="desktop">
	<h1>desktop</h1>

	<!-- {$zStackWindows} -->

	<!-- icons -->
	{#each $allWindowsStore as win}
		<Icon {win} {handleWindowOpen} />
	{/each}

	<!-- opened windows -->
	{#each $openedWindowsStore as win}
		<MoveableWindow box={win} content={win.content} />
	{/each}
</div>

<style>
	.desktop {
		background-image: url('/images/purple-sky.jpg');
		background-color: #534f53;
		background-size: cover;
		background-position: center;

		padding: 32px;
		height: calc(100vh - 64px);
		width: calc(100vw - 64px);

		color: white;
	}
</style>
