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
		/* set image to be static/images/purplesky.jpg */
		background-image: url('/images/purple-sky.jpg');
		background-color: #534f53;
		background-size: cover;
		background-position: center;
		height: 100vh;
		color: white;
		padding: 32px;
	}
</style>
