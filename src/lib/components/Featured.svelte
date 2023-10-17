<script lang="ts">
	import type { Featured } from '$lib/stackbit/models'

	export let data: Featured
	export let id: string
</script>

<section
	data-sb-field-path={id}
	class="flex flex-col md:flex-row max-w-6xl m-auto py-20 md:py-30 px-3"
>
	{#each data.columns as column, i}
		<div data-sb-field-path={`.columns.${i}`} class="px-5 lg:px-7 w-full">
			<h4 data-sb-field-path=".headline" class="text-[#ccc] text-4xl font-normal pb-5 py-6">
				{column.headline}
			</h4>
			<p data-sb-field-path=".body" class="text-xl font-normal text-[#ccc] leading-8">
				{column.body}
			</p>
		</div>
	{/each}
</section>
