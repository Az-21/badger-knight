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

<div class="form-control w-full">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">
    <span class="footer-title label-text">Badge Style</span>
    <span class="badge badge-outline label-text-alt">string</span>
  </label>
  <select class="select select-bordered select-lg h-20" bind:value="{selectedIndex}">
    {#each badgeTypes as badgeType}
      <option value="{badgeType.id}">
        {badgeType.label}
      </option>
    {/each}
  </select>
</div>
