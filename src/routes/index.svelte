<script context="module">
export const prerender = true;
</script>

<script lang="ts">
import Footer from "../lib/Component/Footer.svelte";
import TextBox from "../lib/Component/TextBox.svelte";
import Dropdown from "../lib/Component/Dropdown.svelte";
import BadgePreview from "../lib/Component/BadgePreview.svelte";
import ColorSelector from "../lib/Component/ColorSelector.svelte";

import { BadgeType } from "../lib/DataModel/BadgeType.svelte";
import { GenerateBadge } from "../lib/Function/GenerateBadge.svelte";
import type { IBadgeMetadata } from "../lib/DataModel/IBadgeMetadata.svelte";

let Metadata: IBadgeMetadata = {
  LogoId: "appveyor",
  LogoColor: "#ffffff",
  LogoPadding: "30",
  LeftText: "Left",
  LeftColor: "#2f3e46",
  RightText: "Right",
  RightColor: "#52796f",
  Style: BadgeType.ForTheBadge
};

$: url = GenerateBadge(Metadata);

let liveUrl: string =
  "https://shields.io/badge/Left-Right-blue?style=for-the-badge&logo=appveyor&logoColor=%23ffffff&logoWidth=30&labelColor=%232f3e46&color=%2352796f";
function RefreshBadge() {
  liveUrl = url;
}
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mx-auto grid w-3/5 grid-cols-2 gap-x-32 gap-y-12">
  <TextBox label="Left text" bind:text="{Metadata.LeftText}" />
  <ColorSelector label="Left background" bind:color="{Metadata.LeftColor}" />
  <TextBox label="Right text" bind:text="{Metadata.RightText}" />
  <ColorSelector label="Right background" bind:color="{Metadata.RightColor}" />
  <TextBox label="Logo ID" bind:text="{Metadata.LogoId}" />
  <ColorSelector label="Logo color" bind:color="{Metadata.LogoColor}" />
  <TextBox label="Logo padding" type="number" bind:text="{Metadata.LogoPadding}" />
  <Dropdown bind:selectedIndex="{Metadata.Style}" />
</div>

<br />
{url}
<BadgePreview src="{liveUrl}" />
<div class="flex justify-center">
  <button
    class="rounded border border-emerald-500 bg-transparent py-2 px-4 font-semibold text-emerald-700 hover:border-transparent hover:bg-emerald-500 hover:text-white"
    on:click="{() => RefreshBadge()}">
    Refresh
  </button>
</div>

<Footer />
