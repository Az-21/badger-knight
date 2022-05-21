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
  class="w-full h-10 hover:bg-gray-500 focus:ring rounded-sm focus:ring-emerald-400 text-center"
  bind:value="{selectedIndex}">
  {#each badgeTypes as badgeType}
    <option value="{badgeType.id}">
      {badgeType.label}
    </option>
  {/each}
</select>
