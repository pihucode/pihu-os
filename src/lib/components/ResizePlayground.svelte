<script>
	function move(element) {
		return {
			destroy() {}
		};
	}

	function resize(element) {
		const bottomRight = document.createElement('div');
		bottomRight.direction = 'southeast';
		bottomRight.classList.add('grabber');
		bottomRight.classList.add('bottom-right');

		let active = null,
			initialRect = null,
			initialPos = null;

		element.appendChild(bottomRight);
		bottomRight.addEventListener('mousedown', onMousedown);

		function onMousedown(event) {
			active = event.target;
			const rect = element.getBoundingClientRect();
			const parent = element.parentElement.getBoundingClientRect();

			console.log({ rect, parent });

			initialRect = {
				width: rect.width,
				height: rect.height,
				left: rect.left - parent.left,
				right: parent.right - rect.right,
				top: rect.top - parent.top,
				bottom: parent.bottom - rect.bottom
			};
			initialPos = { x: event.pageX, y: event.pageY };
			active.classList.add('selected');
		}

		function onMouseup(event) {
			if (!active) return;

			active.classList.remove('selected');
			active = null;
			initialRect = null;
			initialPos = null;
		}

		function onMove(event) {
			if (!active) return;

			const direction = active.direction;
			let delta;

			if (direction.match('east')) {
				delta = event.pageX - initialPos.x;
				element.style.width = `${initialRect.width + delta}px`;
			}

			if (direction.match('west')) {
				delta = initialPos.x - event.pageX;
				element.style.left = `${initialRect.left - delta}px`;
				element.style.width = `${initialRect.width + delta}px`;
			}

			if (direction.match('north')) {
				delta = initialPos.y - event.pageY;
				element.style.top = `${initialRect.top - delta}px`;
				element.style.height = `${initialRect.height + delta}px`;
			}

			if (direction.match('south')) {
				delta = event.pageY - initialPos.y;
				element.style.height = `${initialRect.height + delta}px`;
			}
		}

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onMouseup);

		return {
			destroy() {
				window.removeEventListener('mousemove', onMove);
				window.removeEventListener('mousemove', onMousedown);
				element.removeChild(bottomRight);
			}
		};
	}

	let grabber = true;
</script>

<header>
	<h1>8-direction resize</h1>
	<p>Using Svelte Actions</p>

	<label>
		<input type="checkbox" bind:checked={grabber} />
		show grabbers
	</label>
</header>

<main class:hide-grabber={!grabber}>
	<div class="box" use:move use:resize>Box</div>
</main>

<style>
	.box {
		left: 300px;
		top: 100px;
		height: 100px;
		width: 100px;
		background: #e5e5e5;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		user-select: none;
	}

	:global(.grabber) {
		position: absolute;
		box-sizing: border-box;
	}

	:global(.grabber.bottom-right) {
		height: 20px;
		width: 20px;
		background: green;
		bottom: -10px;
		right: -10px;
		cursor: se-resize;
		border-radius: 100%;
	}

	:global(.hide-grabber .grabber) {
		background: transparent !important;
		border: none !important;
	}

	:global(.grabber.selected) {
		border: solid 1px black;
	}

	header {
		text-align: center;
	}
	main {
		flex: 2;
		display: block;
		position: relative;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
