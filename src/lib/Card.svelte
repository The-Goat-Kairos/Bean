<svelte:head>
  <title>Bean World! - Main</title>
</svelte:head>

<script>
    export let activeTab = "Main";

    import Main from "./cards/Main.svelte";
    import About from "./cards/About.svelte";
    import Gallery from "./cards/Gallery.svelte";
    import Pricing from "./cards/Pricing.svelte";

    let defaultColor = "#69B578";
    let backgroundcolor = "";
    if (backgroundcolor === undefined || backgroundcolor === ""){
        backgroundcolor = defaultColor
    }

</script>

<div class="card" style="--background-color: {backgroundcolor}">
    {#if activeTab === "Main"}
        <Main />

    {:else if activeTab === "About"}
        <About />

    {:else if activeTab === "Gallery"}
        <Gallery />

    {:else if activeTab === "Pricing"}
        <Pricing />

    {:else}
        <p>PANIC! CONTACT kairos_the_goat on Discord, because somethings fucked.</p>

    {/if}
</div>

<style>
    .card {
        background: var(--background-color);
        border-radius: 10px;

        display: flex;
        align-items: center;
        flex-direction: column;

        margin-bottom: 0.75rem;
    }
</style>