<style>
input[type="color"] {
  border: none;
  background: none;
  border-radius: 0.125rem;
}
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: solid 0px;
  border-radius: 0.125rem;
}
</style>

<script lang="ts">
export let label: string;
export let color: string;
</script>

<!-- Color selector -->
<div>
  <p class=" text-md font-medium text-zinc-200">{label}</p>
  <input type="color" class="no-border h-12 w-full" bind:value="{color}" />
</div>
