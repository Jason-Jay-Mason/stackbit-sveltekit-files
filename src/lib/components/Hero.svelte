<script lang="ts">
	import type { Hero } from '$lib/stackbit/models'
	import Button from './Button.svelte'

	export let data: Hero
	export let id: string
</script>

<section data-sb-field-path={id} class="bg relative flex flex-row">
	<div class="px-10 w-full max-w-6xl m-auto z-1">
		<div class="flex-col">
			<h1
				data-sb-field-path=".heading"
				class="tracking-[0.8rem] text-8xl font-semibold text-[#ccc]"
			>
				{data.heading}
			</h1>
			<h2 data-sb-field-path=".body" class="font-normal text-3xl py-2 text-[#ccc] max-w-xs">
				{data.body}
			</h2>
			<div class="flex flex-row pt-3">
				{#if data.buttonPrimary}
					<Button data={data.buttonPrimary} id=".buttonPrimary" />
				{/if}
				{#if data.buttonSecondary}
					<Button data={data.buttonSecondary} id=".buttonSecondary" />
				{/if}
			</div>
		</div>
	</div>
	<img
		src="/svelte-machine-desktop.png"
    alt="Svelte Icon"
		class=" w-[140vw] left-[-20vw] z-0 top-25 lg:top-40 lg:left-auto lg:w-[100vw] h-auto absolute"
	/>
</section>

<style>
	.bg {
		height: calc(10rem + 20vw);
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
