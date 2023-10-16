<script lang="ts">
	import type { PageData } from './$types'
	import PageBlock from '$lib/components/PageBlock.svelte'

	export let data: PageData
</script>

<div data-sb-object-id={data.content.path}>
	{#each data.content.blocks as block, i}
		<PageBlock {block} id={`blocks.${i}`} />
	{/each}
</div>
