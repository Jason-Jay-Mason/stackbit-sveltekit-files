<script lang="ts">
	import type { Button, ButtonTheme } from '$lib/stackbit/models'

	export let data: Button
	const defaultStyles = 'p-2' + ' '
	const themes: Record<ButtonTheme, string> = {
		Subtle: defaultStyles + 'bg-[#606060] rounded-md text-white'
	}
	const styles = themes[data.theme] || defaultStyles + 'default'
</script>

<a href={data.url} data-sb-field-path=".buttonSecondary.label" class={styles}>{data.label}</a>
