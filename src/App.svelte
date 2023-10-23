<script>
    import { setContext } from "svelte";

    import Checkbox from "./components/Checkbox.svelte";
    import Date from "./components/Date.svelte";
    import AddTask from "./components/AddTask.svelte";
    import {writable} from 'svelte/store';
    import TaskList from "./components/TaskList.svelte";


    export const store = writable({ "currentDay": 0 });
    setContext("store", store);
    
</script>

<main
    class="bg-black relative w-screen px-[20px] py-[24px] h-screen text-center text-white overflow-hidden"
>
    <Date />
    <TaskList />
    <AddTask />
</main>

<style>
</style>
