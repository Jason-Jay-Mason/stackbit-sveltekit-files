<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte'
	import Hero from '$lib/components/Hero.svelte'
	import Featured from '$lib/components/Featured.svelte'

	export let block: { type: string }
	export let id: string

	type BlockMap = Record<string, ComponentType>
	const blockMap: BlockMap = {
		Hero: Hero,
		Featured: Featured
	}

	const component: ComponentType<SvelteComponent<{ data: typeof block; id: string }>> =
		blockMap[block.type]
</script>

<svelte:component this={component} data={block} {id} />
