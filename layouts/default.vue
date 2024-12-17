<template>
	<div id="app">
		<header>
			<PublicHeader />
		</header>
		<main :style="{
			'background-color': canLoad ? 'unset' : '#101010',
			'min-height': canLoad ? 'unset' : '1000px'
		}">
			<div class="left-imprint"></div>
			<div class="right-imprint"></div>
			<nuxt />
		</main>
		<footer>
			<PublicFooter />
		</footer>
	</div>
</template>

<script>

export default {
	components: {
	},
	head() {
		return {
			link: [
				{ rel: 'canonical', href: `https://www.rampingup.com${this.$route.path}` }
			]
		}
	},
	data() {
		return {
			canLoad: false
		}
	},
	mounted() {
		this.canLoad = true
	}
}
</script>

<style scoped>
@media (max-width: 600px) {
	main>.left-imprint, main>.right-imprint {
		display: none;
	}
	main>.right-imprint{
		width: 180px;
		height: 306px;
		position: absolute;
		top: var(--h5-headerHeight);
		right: 0;
		z-index: 100;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/page_right.png');
		background-size: 100% auto;
		pointer-events: none;
	}
}
@media (min-width: 600px) {
	main>.left-imprint{
		width: 410px;
		height: 700px;
		position: absolute;
		top: var(--headerHeight);
		left: 0;
		z-index: 100;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/page_left.png');
		pointer-events: none;
	}
	main>.right-imprint{
		width: 410px;
		height: 700px;
		position: absolute;
		top: var(--headerHeight);
		right: 0;
		z-index: 100;
		/* opacity: 0.7; */
		background-image: url('@/assets/images/page_right.png');
		pointer-events: none;
	}
}

</style>
