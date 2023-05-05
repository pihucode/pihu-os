<script>
	let isDragging = false;
	let dragStartX, dragStartY;
	let divRef;

	function handleMouseDown(e) {
		// Set the dragging flag and save the initial mouse position relative to the movable element
		isDragging = true;
		dragStartX = e.clientX - divRef.offsetLeft;
		dragStartY = e.clientY - divRef.offsetTop;

		// Add the 'dragging' class for visual feedback
		divRef.classList.add('dragging');
	}

	function handleMouseMove(e) {
		// If the dragging flag is set, update the position of the movable element based on the mouse position
		if (isDragging) {
			const newLeft = e.clientX - dragStartX;
			const newTop = e.clientY - dragStartY;
			divRef.style.left = newLeft + 'px';
			divRef.style.top = newTop + 'px';
		}
	}

	function handleMouseUp() {
		// Reset the dragging flag and remove the 'dragging' class
		isDragging = false;
		divRef.classList.remove('dragging');
	}
</script>

<div
	bind:this={divRef}
	class="sample"
	style="position: absolute; top: 0; left: 0;"
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
>
	Move me!
</div>

<style>
	.sample {
		background-color: cadetblue;
		padding: 20px;
	}
</style>
