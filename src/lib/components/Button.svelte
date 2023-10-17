<script lang="ts">
	import type { Button, ButtonTheme } from '$lib/stackbit/models'

	export let data: Button
	export let id: string
	const defaultStyles =
		'pt-1 pb-2 px-4 font-medium text-white rounded-md mr-2 drop-shadow hover:drop-shadow-xl transition-all' +
		' '
	const themes: Record<ButtonTheme, string> = {
		Subtle: defaultStyles + 'bg-[#606060]'
	}
	const styles = themes[data.theme] || defaultStyles + 'bg-[#c30]'
</script>

<a href={data.url} data-sb-field-path={`${id}.label`} class={styles}>{data.label}</a>
