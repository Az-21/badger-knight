<script>
// @ts-nocheck

import { onMount } from "svelte";
import { themeChange } from "theme-change";

onMount(() => {
  themeChange(false); // false param required for svelte
});
</script>

<nav class="mb-12 bg-zinc-800 py-12">
  <div class="mx-auto w-3/5">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <p class="text-3xl font-extrabold tracking-widest text-emerald-300">BADGER KNIGHT</p>
      <div>
        <a
          class="pl-4 text-zinc-400 hover:text-emerald-500 hover:underline"
          href="https://github.com/Az-21/badger-knight/">
          GitHub
        </a>
        <a class="pl-4 text-zinc-400 hover:text-emerald-500 hover:underline" href="https://shields.io/">Shields.io</a>
        <select data-choose-theme>
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
</nav>
