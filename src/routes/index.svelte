<script context="module">
export const prerender = true;
</script>

<script lang="ts">
import Navbar from "../lib/Component/Navbar.svelte";
import Footer from "../lib/Component/Footer.svelte";
import TextBox from "../lib/Component/TextBox.svelte";
import Dropdown from "../lib/Component/Dropdown.svelte";
import BadgePreview from "../lib/Component/BadgePreview.svelte";
import ColorSelector from "../lib/Component/ColorSelector.svelte";

import { BadgeType } from "../lib/DataModel/BadgeType.svelte";
import { GenerateBadge } from "../lib/Function/GenerateBadge.svelte";
import type { IBadgeMetadata } from "../lib/DataModel/IBadgeMetadata.svelte";

let Metadata: IBadgeMetadata = {
  LogoId: "googlefit",
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
  "https://shields.io/badge/Left-Right-blue?style=for-the-badge&logo=googlefit&logoColor=%23ffffff&logoWidth=30&labelColor=%232f3e46&color=%2352796f";

function RefreshBadge() {
  liveUrl = url;
}

function CopyToClipboard() {
  navigator.clipboard.writeText(url);
}
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />

<div class="mx-auto grid w-4/5 grid-cols-2 gap-y-8 gap-x-16">
  <TextBox label="Left text" bind:text="{Metadata.LeftText}" />
  <ColorSelector label="Left background" bind:color="{Metadata.LeftColor}" />
  <TextBox label="Right text" bind:text="{Metadata.RightText}" />
  <ColorSelector label="Right background" bind:color="{Metadata.RightColor}" />
  <TextBox label="Logo ID" bind:text="{Metadata.LogoId}" />
  <ColorSelector label="Logo color" bind:color="{Metadata.LogoColor}" />
  <TextBox label="Logo padding" type="int" bind:text="{Metadata.LogoPadding}" />
  <Dropdown bind:selectedIndex="{Metadata.Style}" />
</div>

<div class="mx-auto flex w-4/5">
  <BadgePreview liveUrl="{liveUrl}" url="{url}" />
</div>

<div class="mb-8 flex justify-center gap-x-12">
  <button class="btn btn-outline px-12" on:click="{() => RefreshBadge()}">Regenerate Badge</button>
  <button class="btn btn-outline px-12" on:click="{() => CopyToClipboard()}">Copy to Clipboard</button>
</div>

<Footer />
