<script lang="ts">
import { BadgeType } from "../DataModel/BadgeType.svelte";

const badgeTypes = [
  { id: BadgeType.Flat, label: "Flat" },
  { id: BadgeType.Social, label: "Social" },
  { id: BadgeType.Plastic, label: "Plastic" },
  { id: BadgeType.FlatSquare, label: "Flat Square" },
  { id: BadgeType.ForTheBadge, label: "For The Badge" }
];

export let selectedIndex: number;
</script>

<select
  class="h-10 w-full rounded-sm text-center hover:bg-gray-500 focus:ring focus:ring-emerald-400"
  bind:value="{selectedIndex}"
>
  {#each badgeTypes as badgeType}
    <option value="{badgeType.id}">
      {badgeType.label}
    </option>
  {/each}
</select>
