<script lang="ts">
export let url: string;
export let liveUrl: string;
</script>

<div class="flex w-full flex-col pt-12">
  <div class="flex justify-between pb-4">
    <p class=" text-md font-medium text-zinc-200">Badge URL</p>
    <span class="mr-2 rounded bg-zinc-900 px-2.5 py-0.5 text-sm font-medium text-fuchsia-500">STRING</span>
  </div>
  <input
    id="textcopy"
    type="text"
    disabled
    class="h-12 w-full rounded-sm bg-zinc-800 pl-4 text-white hover:bg-zinc-900 focus:ring focus:ring-emerald-400"
    value="{url}" />
  <div class="mx-auto justify-center p-12">
    <img class="h-12" src="{liveUrl}" alt="Shields.io badge | Az-21/badger-knight" />
  </div>
</div>
