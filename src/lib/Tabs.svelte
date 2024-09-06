<script>
    import { createEventDispatcher } from 'svelte';
    
    let activeTab = 'Main'
    const dispatch = createEventDispatcher();

    let tabs = [
        { name: 'Main', selected: true },
        { name: 'About', selected: false },
        { name: 'Gallery', selected: false },
        { name: 'Pricing', selected: false}
    ];
    

    function handle(clickedTab){
        activeTab = clickedTab;

        tabs = tabs.map(tabItem => ({
            ...tabItem,
            selected: tabItem.name === activeTab,
        }));

        dispatch('dataChange', activeTab)
    }
</script>

<div id="tabs">
    {#each tabs as tabItem (tabItem.name)}
        <button
            class="tab"
            class:selected={tabItem.selected}
            on:click={() => handle(tabItem.name)}
            >
            {tabItem.name}
        </button>
    {/each}
</div>

<style>
    button {
        border: none;
        transition-duration: 75ms;
        background-color: rgb(61, 199, 19);
    }
    
    .selected {
        background-color: #92ff7c;
        transform: scale(1.2) translateY(-9%);
    }
</style>