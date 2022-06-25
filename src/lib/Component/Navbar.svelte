<script>
// @ts-nocheck

import { onMount } from "svelte";
import { themeChange } from "theme-change";

onMount(() => {
  themeChange(false); // false param required for svelte
});
</script>

<div class="mx-auto mb-8 w-full bg-base-300 py-6">
  <div class="navbar mx-auto flex w-4/5">
    <div class="navbar-start">
      <p class="text-4xl font-bold">Badger Knight</p>
    </div>

    <div class="navbar-end">
      <select class="select select-bordered" data-choose-theme>
        <option value="graden">Garden</option>
        <option value="black">Black</option>
        <option value="retro">Retro</option>
        <option value="forest">Forest</option>
        <option value="dracula">Dracula</option>
        <option value="business">Business</option>
        <option value="night">Night</option>
      </select>
    </div>
  </div>
</div>
