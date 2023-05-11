<script>
	import { closeWindow } from '$lib/stores/windows';

	export let window;
	export let content = 'window title';

	let isDragging = false;
	let dragStartX, dragStartY;
	let container, bar;

	const handleMouseDown = (e) => {
		isDragging = true;
		dragStartX = e.clientX - container.offsetLeft;
		dragStartY = e.clientY - container.offsetTop;
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			const newLeft = e.clientX - dragStartX;
			const newTop = e.clientY - dragStartY;
			container.style.left = newLeft + 'px';
			container.style.top = newTop + 'px';
		}
	};

	const handleMouseUp = () => {
		isDragging = false;
	};
</script>

<div bind:this={container} class="moveable sample">
	<div
		bind:this={bar}
		class="bar"
		on:mousedown={handleMouseDown}
		on:mousemove={handleMouseMove}
		on:mouseup={handleMouseUp}
	>
		window bar
		<button on:click={() => closeWindow(window.id)}>X</button>
	</div>
	<p>{content}</p>
	<p>{isDragging} - {dragStartX}, {dragStartY}</p>
</div>

<style>
	.moveable {
		position: absolute;
		top: 400px;
		left: 400px;
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
