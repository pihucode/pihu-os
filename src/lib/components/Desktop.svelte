<script>
	import MoveableWindow from '$lib/components/MoveableWindow.svelte';

	let windows = []; // list of opened MoveableWindows

	const handleFolderOpen = (text) => {
		if (!windows.includes(text)) {
			windows = [...windows, text];
		}
	};
</script>

<div>
	<h1>desktop</h1>
	<button on:dblclick={() => handleFolderOpen('folder 1')}>folder 1</button>
	<button on:dblclick={() => handleFolderOpen('folder 2')}>folder 2</button>

	<MoveableWindow content="main" />

	<!-- for each -->
	{#each windows as windowName}
		<MoveableWindow content={windowName} />
	{/each}

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut dui vel risus placerat
		maximus. Nunc sed mattis ipsum. Aenean euismod, magna eu tincidunt finibus, dui justo blandit
		metus, a vulputate libero augue in sapien. Nullam eu justo et mauris scelerisque fermentum vel
		sit amet arcu. Cras vulputate ligula sed ultrices porta. Duis mollis tincidunt nisl, a sodales
		ante blandit et. Nam maximus, diam ut pulvinar porttitor, quam ex convallis leo, in pulvinar
		tortor massa in ligula. Proin eu pretium libero, a gravida arcu. Curabitur ut placerat nibh.
		Proin dapibus, massa nec laoreet vehicula, nulla est convallis dui, eget maximus nunc lacus id
		nisi. Morbi volutpat pellentesque magna ac congue. Sed dignissim dolor eu leo facilisis mollis.
		Morbi ut arcu id nibh molestie tincidunt. Aliquam urna nibh, iaculis a pharetra vel, ornare nec
		leo. Donec non consequat diam. Duis laoreet hendrerit pulvinar. Integer ac porttitor metus. Ut
		sodales nibh nec cursus bibendum. Phasellus hendrerit ipsum quis diam vulputate dictum. Donec
		venenatis vehicula mollis. Donec consequat lobortis metus ac volutpat. Donec tortor erat,
		suscipit convallis ligula quis, aliquet vehicula turpis. Fusce lacinia mollis pretium. Etiam
		commodo risus eu tincidunt aliquam. Suspendisse tincidunt libero dolor, vel efficitur elit
		feugiat eu. Pellentesque ut aliquam leo. Cras et mattis turpis, vitae tincidunt nulla. Integer
		in pretium dolor, sit amet ullamcorper diam. Donec pretium molestie tellus in posuere. Quisque
		id purus vitae ligula pretium euismod quis non leo. Proin et dapibus mauris. Integer eleifend
		dictum enim a semper. Cras porta lectus est, vel venenatis tellus convallis a. In aliquam arcu
		nec purus tristique, at varius sem varius. Vivamus tempus condimentum accumsan. Ut vel commodo
		lacus, vel sollicitudin massa. Suspendisse rutrum congue est, in sagittis ante posuere at. Nulla
		id purus id justo scelerisque rutrum sit amet sit amet augue. Pellentesque habitant morbi
		tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae massa lorem.
		Curabitur blandit dolor dolor, tincidunt pulvinar elit elementum interdum. Proin ac elit nec sem
		eleifend volutpat. Nunc mi nunc, sagittis lobortis maximus eu, dapibus eget sem. Quisque
		lobortis facilisis magna ac malesuada. Aliquam semper leo libero, vel sollicitudin nulla
		accumsan vel. Pellentesque gravida ligula quam, in suscipit tortor laoreet eu. Aenean quis
		suscipit nunc. Vestibulum vitae justo mi. Maecenas sagittis tellus odio, at laoreet diam aliquet
		a. Nunc id nulla maximus, aliquam arcu in, ultrices enim. In ultrices neque eu condimentum
		bibendum. Duis urna augue, varius sed sodales a, venenatis sit amet arcu. Fusce sit amet varius
		mauris, eget tincidunt erat. Praesent pulvinar ultrices nisi, sed pharetra nisi aliquet sed.
		Aenean iaculis sed lacus quis ornare. Donec semper massa dolor, eu dictum mauris posuere in.
		Morbi sed tortor sed magna efficitur accumsan. Duis mattis efficitur elit, et ultrices turpis
		ultricies a. Integer viverra nulla dui, ac efficitur dolor mollis sed. In non ex in urna
		vulputate ornare id eget neque. Aliquam volutpat, sem vel aliquam ullamcorper, ante urna blandit
		ipsum, nec fermentum libero risus quis purus. Praesent et pulvinar erat. Vivamus eget
		ullamcorper turpis, in hendrerit leo. Nullam eu risus ac lectus fermentum cursus. Ut vitae
		tempus nulla.
	</p>
</div>

<style></style>
