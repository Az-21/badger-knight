<script lang="ts">
export let color: string;
</script>

<!-- Color selector -->
<input 
  type="color"
  class="w-full h-10 no-border"
  bind:value={ color } />

<style>
input[type=color]{
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