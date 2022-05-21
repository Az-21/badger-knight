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

<div>
  <p class=" text-md font-medium text-zinc-200">Badge style</p>
  <select
    class="h-12 w-full rounded-sm bg-zinc-800 text-center text-white focus:ring focus:ring-emerald-400"
    bind:value="{selectedIndex}">
    {#each badgeTypes as badgeType}
      <option value="{badgeType.id}">
        {badgeType.label}
      </option>
    {/each}
  </select>
</div>
