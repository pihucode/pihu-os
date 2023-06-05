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

	<div class="bg blur cover" />
	<div class="tint overlay cover" />
	<div class="texture overlay cover" />
</div>

<style>
	.desktop {
		padding: 32px;
		height: calc(100vh - 64px);
		width: calc(100vw - 64px);
		color: white;
	}

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		pointer-events: none;
	}

	.bg {
		background-image: url('/images/purple-sky.jpg');
		/* background-image: url('https://i.imgur.com/t7aUCIw.jpg'); */
		background-color: #534f53;
		background-size: cover;
		background-position: center;
		z-index: -1;
	}

	.overlay {
		z-index: 99;
	}

	.tint {
		background-color: violet;
		opacity: 0.04;
	}

	.texture {
		/* triangle */
		background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VlZDI1Mjc5MTQ1YTMxZDkwMDgxYmVjMzcwYjI4NmQ2ZjY2MzFhMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WQr1oECbU3AqMfc8fB/giphy.gif');
		opacity: 0.04;
		background-repeat: repeat;
	}

	.blur::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(4px);
	}
</style>
