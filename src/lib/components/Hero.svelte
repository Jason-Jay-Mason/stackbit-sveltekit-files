<script lang="ts">
	import type { Hero } from '$lib/stackbit/models'
	import Button from './Button.svelte'

	export let data: Hero
	export let id: string
</script>

<section data-sb-field-path={id} class="bg">
	<h1 data-sb-field-path=".heading">
		{data.heading}
	</h1>
	{#if data.buttonPrimary}
		<Button data={data.buttonPrimary} />
	{/if}
	{#if data.buttonSecondary}
		<Button data={data.buttonSecondary} />
	{/if}
</section>

<style>
	.bg {
		background: radial-gradient(
				64.14% 72.25% at 47.58% 31.75%,
				rgba(113, 120, 127, 0.52) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(
				92.4deg,
				#26292c 14.67%,
				rgba(0, 0, 0, 0.48) 54.37%,
				rgba(26, 34, 40, 0.62) 92.49%
			),
			linear-gradient(#e3e6e8, #203746);
	}
</style>
