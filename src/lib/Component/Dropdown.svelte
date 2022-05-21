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

<div class="flex flex-col gap-y-4">
  <div class="flex justify-between gap-x-2">
    <p class=" text-md font-medium text-zinc-200">Badge style</p>
    <span class="mr-2 rounded bg-zinc-900 px-2.5 py-0.5 text-sm font-medium text-blue-500">ENUM</span>
  </div>
  <select class="h-12 w-full rounded-sm bg-zinc-800 pl-4 text-white" bind:value="{selectedIndex}">
    {#each badgeTypes as badgeType}
      <option value="{badgeType.id}">
        {badgeType.label}
      </option>
    {/each}
  </select>
</div>
