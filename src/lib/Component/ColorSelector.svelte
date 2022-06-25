<style>
/* Remove the default webkit border on the color input box */
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
<div class="form-control w-full">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">
    <span class="footer-title label-text">{label}</span>
    <span class="badge badge-outline label-text-alt">hex</span>
  </label>
  <input type="color" class="h-20 w-full" bind:value="{color}" />
</div>
