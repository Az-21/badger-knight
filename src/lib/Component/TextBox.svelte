<script lang="ts">
export let text: string;
export let label: string;
export let type: string = "string";
</script>

<!-- Textbox -->
<div class="form-control w-full">
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">
    <span class="footer-title label-text">{label}</span>
    <div>
      {#if label === "Logo ID"}
        <span class="label-text">
          <a href="https://simpleicons.org/" class=" link mr-6">All Icons</a>
        </span>
      {/if}

      <span class="badge badge-outline label-text-alt">{type}</span>
    </div>
  </label>
  {#if type === "int"}
    <input placeholder="Type here" class="input input-bordered input-lg h-20" bind:value="{text}" type="number" />
  {:else}
    <input placeholder="Type here" class="input input-bordered input-lg h-20" bind:value="{text}" type="text" />
  {/if}
</div>
