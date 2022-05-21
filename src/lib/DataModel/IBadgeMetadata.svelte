<script lang="ts" context="module">
	import type { BadgeType } from './BadgeType.svelte';
	export interface IBadgeMetadata {
		// [ Logo + Left | Right ]
		LogoId: string;
		LogoColor: string;
		LogoPadding: string;

		LeftText: string;
		LeftColor: string;

		RightText: string;
		RightColor: string;

		Style: BadgeType;
	}
</script>
