<script lang="ts" context="module">
	import { EncodeUri } from './EncodeUri.svelte';
	import { BadgeType } from '../DataModel/BadgeType.svelte';
	import type { IBadgeMetadata } from '../DataModel/IBadgeMetadata.svelte';

	export function GenerateBadge(metadata: IBadgeMetadata): string {
		let url: string = 'https://shields.io/badge/';
		url += EncodeUri(metadata.LeftText);

		// Only add right text if it is not empty
		if (metadata.RightText !== '') {
			url += '-'; // Param separator
			url += EncodeUri(metadata.RightText);
		}

		url += '-blue'; // Overwritten later, but required here
		url += `?style=${ParseStyle(metadata.Style)}`;
		url += `&logo=${EncodeUri(metadata.LogoId)}`;
		url += `&logoColor=${EncodeUri(metadata.LogoColor)}`;
		url += `&logoWidth=${Number(metadata.LogoPadding)}`;
		url += `&labelColor=${EncodeUri(metadata.LeftColor)}`;
		url += `&color=${EncodeUri(metadata.RightColor)}`;

		return url;
	}

	function ParseStyle(style: BadgeType): string {
		switch (style) {
			case BadgeType.Flat:
				return 'flat';
			case BadgeType.Social:
				return 'social';
			case BadgeType.Plastic:
				return 'plastic';
			case BadgeType.FlatSquare:
				return 'flat-square';
			case BadgeType.ForTheBadge:
				return 'for-the-badge';

			default:
				console.error('Uncaught badge type in src/Function/GenerateBadge.ts');
				return 'for-the-badge';
		}
	}
</script>
