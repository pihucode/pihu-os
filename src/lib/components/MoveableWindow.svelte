<script>
	import { closeWindow } from '$lib/stores/windows';

	export let window;
	export let content = 'window title';

	let isDragging = false;
	let left = 400,
		top = 400;

	const handleMouseDown = () => {
		isDragging = true;
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			left += e.movementX;
			top += e.movementY;
		}
	};

	const handleMouseUp = () => {
		isDragging = false;
	};
</script>

<div class="moveable sample" style="left: {left}px; top: {top}px;">
	<div class="bar" on:mousedown={handleMouseDown}>
		window bar
		<button on:click={() => closeWindow(window.id)}>X</button>
	</div>
	<p>{content}</p>
	<p>{isDragging} - {left}, {top}</p>
</div>

<svelte:window on:mouseup={handleMouseUp} on:mousemove={handleMouseMove} />

<style>
	.moveable {
		position: absolute;
		z-index: 100;
	}

	.sample {
		display: inline-block;
		width: 300px;
		height: 200px;
		background-color: #0d0c1d;
		color: white;
		font-family: 'Courier New', Courier, monospace;
	}
	.bar {
		background-color: #2e2d40;
		color: white;
		padding: 8px;
		font-weight: bold;
		font-size: 12px;
	}
</style>
