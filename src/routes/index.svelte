<script context="module">
export const prerender = true;
</script>

<script lang="ts">
import Label from "../lib/Component/Label.svelte";
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

Logo
<div class="grid grid-cols-2 place-items-start items-center gap-8 p-8">
  <Label text="Logo ID" />
  <TextBox bind:text="{Metadata.LogoId}" />

  <Label text="Logo color" />
  <ColorSelector bind:color="{Metadata.LogoColor}" />

  <Label text="Logo padding" />
  <TextBox type="number" bind:text="{Metadata.LogoPadding}" />
</div>

LHS
<div class="grid grid-cols-2 place-items-start items-center gap-8 p-8">
  <Label text="Text" />
  <TextBox bind:text="{Metadata.LeftText}" />

  <Label text="Background color" />
  <ColorSelector bind:color="{Metadata.LeftColor}" />
</div>

RHS
<div class="grid grid-cols-2 place-items-start items-center gap-8 p-8">
  <Label text="Text" />
  <TextBox bind:text="{Metadata.RightText}" />

  <Label text="Background color" />
  <ColorSelector bind:color="{Metadata.RightColor}" />
</div>

Style
<div class="grid grid-cols-2 place-items-start items-center gap-8 p-8">
  <Label text="Badge style" />
  <Dropdown bind:selectedIndex="{Metadata.Style}" />
</div>

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
