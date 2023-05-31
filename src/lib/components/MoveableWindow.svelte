<script>
	import { closeWindow } from '$lib/stores/windows';
	import { zStackWindows, moveWindowUpZStack } from '$lib/stores/windowZStack';

	export let box;
	export let content = 'window title';

	const Z_INDEX_PADDING = 10;

	// ================== code for dragging window box ==================
	let isDragging = false;

	const dragOMouseDown = () => {
		isDragging = true;
	};

	const dragOnMouseMove = (e) => {
		if (isDragging) {
			box.position.x += e.movementX;
			box.position.y += e.movementY;
		}
	};

	const dragOMouseUp = (e) => {
		isDragging = false;
	};

	// ================== code for resizing window box ==================
	let grabber = true;

	let isResizing = null,
		initialPos = null;

	var boxElement;

	function move(element) {
		return {
			destroy() {}
		};
	}

	function resize(element) {
		boxElement = element;

		const bottomRight = document.createElement('div');
		bottomRight.direction = 'southeast';
		bottomRight.classList.add('grabber');
		bottomRight.classList.add('bottom-right');

		element.appendChild(bottomRight);
		bottomRight.addEventListener('mousedown', resizeOnMouseDown);

		return {
			destroy() {
				element.removeChild(bottomRight);
			}
		};
	}

	function resizeOnMouseDown(event) {
		isResizing = event.target;
		const rect = boxElement.getBoundingClientRect();
		const parent = boxElement.parentElement.getBoundingClientRect();

		const initialRect = {
			width: rect.width,
			height: rect.height,
			left: rect.left - parent.left,
			right: parent.right - rect.right,
			top: rect.top - parent.top,
			bottom: parent.bottom - rect.bottom
		};
		box.bounds = initialRect;

		initialPos = { x: event.pageX, y: event.pageY };
		isResizing.classList.add('selected');
	}

	function resizeOnMouseUp(event) {
		if (!isResizing) return;

		const rect = boxElement.getBoundingClientRect();
		const parent = boxElement.parentElement.getBoundingClientRect();

		const finalRect = {
			width: rect.width,
			height: rect.height,
			left: rect.left - parent.left,
			right: parent.right - rect.right,
			top: rect.top - parent.top,
			bottom: parent.bottom - rect.bottom
		};
		box.bounds = finalRect;

		isResizing.classList.remove('selected');
		isResizing = null;
		initialPos = null;
	}

	function resizeOnMouseMove(event) {
		if (!isResizing) return;

		const direction = isResizing.direction;
		let delta;

		if (direction.match('east')) {
			delta = event.pageX - initialPos.x;
			boxElement.style.width = `${box.bounds.width + delta}px`;
		}
		if (direction.match('west')) {
			delta = initialPos.x - event.pageX;
			boxElement.style.left = `${box.bounds.left - delta}px`;
			boxElement.style.width = `${box.bounds.width + delta}px`;
		}
		if (direction.match('north')) {
			delta = initialPos.y - event.pageY;
			boxElement.style.top = `${box.bounds.top - delta}px`;
			boxElement.style.height = `${box.bounds.height + delta}px`;
		}
		if (direction.match('south')) {
			delta = event.pageY - initialPos.y;
			boxElement.style.height = `${box.bounds.height + delta}px`;
		}
	}
	// ================== window handlers ==================
	const handleMouseMove = (e) => {
		dragOnMouseMove(e);
		resizeOnMouseMove(e);
	};

	const handleMouseUp = (e) => {
		dragOMouseUp(e);
		resizeOnMouseUp(e);
	};

	// ================== CSS variables ==================
	$: cssVarStyles = `--zIndex:${
		$zStackWindows.findIndex((winId) => winId === box.id) + Z_INDEX_PADDING
	};`;
</script>

<div
	class="moveable container"
	style="
        left: {box.position.x}px; 
        top: {box.position.y}px; 
        width: {box.bounds.width}px; 
        height: {box.bounds.height}px;
        {cssVarStyles}"
	use:move
	use:resize
	on:mousedown={() => moveWindowUpZStack(box.id)}
>
	<div class="bar" on:mousedown={dragOMouseDown}>
		window bar
		<button on:click={() => closeWindow(box.id)}>X</button>
	</div>
	<p>{content}</p>
	<p>isDragging: {isDragging} ({box.position.x}, {box.position.y})</p>
	<p>z index: {$zStackWindows.findIndex((winId) => winId === box.id) + Z_INDEX_PADDING}</p>
</div>

<svelte:window on:mouseup={handleMouseUp} on:mousemove={handleMouseMove} />

<style>
	.moveable {
		position: absolute;
		z-index: var(--zIndex);
	}

	.container {
		display: inline-block;
		background-color: #0d0c1d;
		color: white;
		font-family: 'Courier New', Courier, monospace;
	}
	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #2e2d40;
		color: white;
		padding: 8px;
		font-weight: bold;
		font-size: 12px;
	}

	:global(.grabber) {
		position: absolute;
		box-sizing: border-box;
	}

	:global(.grabber.bottom-right) {
		height: 40px;
		width: 40px;
		background: magenta;
		bottom: -10px;
		right: -10px;
		cursor: se-resize;
		border-radius: 100%;

		background: transparent !important;
		border: none !important;
	}

	:global(.grabber.selected) {
		border: solid 2px cyan;
	}
</style>
