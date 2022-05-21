<script lang="ts">
export let text: string;
export let label: string;
export let type: string = "string";
</script>

<!-- Textbox -->
<div class="flex flex-col gap-y-4">
  <div class="flex justify-between gap-x-2">
    <p class=" text-md font-medium text-zinc-200">{label}</p>
    <span class="mr-2 rounded bg-zinc-900 px-2.5 py-0.5 text-sm font-medium text-purple-500">{type.toUpperCase()}</span>
  </div>

  {#if type === "int"}
    <input
      type="number"
      class="h-12 w-full rounded-sm bg-zinc-800 pl-4 text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
      bind:value="{text}" />
  {:else}
    <input
      class="h-12 w-full rounded-sm bg-zinc-800 pl-4 text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
      bind:value="{text}" />
  {/if}
</div>
