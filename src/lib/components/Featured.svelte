<script lang="ts">
	import type { Featured } from '$lib/stackbit/models'

	export let data: Featured
	export let id: string
</script>

<section data-sb-field-path={id}>
	{#each data.columns as column, i}
		<div data-sb-field-path={`.columns.${i}`}>
			<h4 data-sb-field-path=".headline">{column.headline}</h4>
			<p data-sb-field-path=".body">{column.body}</p>
		</div>
	{/each}
</section>
