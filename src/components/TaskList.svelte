<script>
    import { getContext } from "svelte";
    import Checkbox from "./Checkbox.svelte";
    import { calculateDate } from "../utils/date";
    import { getTasks } from "../ports/getTasks";
    import { get } from "svelte/store";

    const store = getContext("store");

    let tasks = [];
    $: {
        store.subscribe((currentDay) => (tasks = getTasks(currentDay)));
    }
</script>

<ul class="flex items-start flex-col mt-[36px] w-full h-full overflow-scroll ">
    {#each tasks ?? [] as { id, text }}
        <li class="w-full">
            <Checkbox labelText={text} {id} />
            <Checkbox labelText={text} {id} />

        </li>


    {:else}
       <div class=" w-full h-[30vh] font-thin">

           no tasks for today 🎉

       </div>
    {/each}
</ul>
