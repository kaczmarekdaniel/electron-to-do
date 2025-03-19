<script>
    import ChevronRight from "../assets/chevron-right.svg";
    import ChevronLeft from "../assets/chevron-left.svg";
    import { calculateDate } from "../utils/date";
    import { getContext, setContext } from 'svelte'


    let count = 0;
    let today = calculateDate(count);
    const store = getContext("store");
    const increment = () => {
        count += 1;
    };

    const decrement = () => {
        count -= 1;
    };

    $: {
        today = calculateDate(count);
        store.update(currentDay => today.fetchDate)
    }
</script>

<header class="flex w-full items-center justify-between">
    <button on:click={decrement}>
        <img src={ChevronLeft} alt="" />
    </button>
    <div>
        <span class="opacity-50 text-[12px]">{today.monthDay}</span>
        <h1 class="bold text-[22px] font-bold italic">{today.weekday}</h1>

    </div>
    <button on:click={increment}>
        <img src={ChevronRight} alt="" />
    </button>
</header>
