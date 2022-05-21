<script lang="ts">
export let text: string;
export let label: string;
export let type: string = "text";
</script>

<!-- Textbox -->
<div>
  <p class=" text-md font-medium text-zinc-200">{label}</p>
  {#if type === "text"}
    <input
      type="text"
      class="h-12 w-full rounded-sm bg-zinc-800 text-center text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
      bind:value="{text}" />
  {:else if type === "number"}
    <input
      type="number"
      class="h-12 w-full rounded-sm bg-zinc-800 text-center text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
      bind:value="{text}" />
  {:else}
    <input
      class="h-12 w-full rounded-sm bg-zinc-800 text-center text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
      bind:value="{text}" />
  {/if}
</div>
