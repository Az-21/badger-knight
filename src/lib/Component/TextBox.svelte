<script lang="ts">
export let text: string;
export let type: string = "text";
</script>

<!-- Textbox -->
{#if type === "text"}
  <input
    type="text"
    class="h-10 w-full rounded-sm text-center hover:bg-gray-500 focus:ring focus:ring-emerald-400"
    bind:value="{text}" />
{:else if type === "number"}
  <input
    type="number"
    class="h-10 w-full rounded-sm text-center hover:bg-gray-500 focus:ring focus:ring-emerald-400"
    bind:value="{text}" />
{:else}
  <input
    class="h-10 w-full rounded-sm text-center hover:bg-gray-500 focus:ring focus:ring-emerald-400"
    bind:value="{text}" />
{/if}
