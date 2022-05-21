<script lang="ts">
export let text: string;
export let type: string = "text";
</script>

<!-- Textbox -->
{#if type === "text"}
<input 
  type="text"
  class="w-full h-10 hover:bg-gray-500 focus:ring rounded-sm focus:ring-emerald-400 text-center"
  bind:value={ text } />

{:else if type === "number"}
<input 
  type="number"
  class="w-full h-10 hover:bg-gray-500 focus:ring rounded-sm focus:ring-emerald-400 text-center"
  bind:value={ text } />

{:else}
<input 
  class="w-full h-10 hover:bg-gray-500 focus:ring rounded-sm focus:ring-emerald-400 text-center"
  bind:value={ text } />
{/if}
