<script>
    import Checkmark from "../assets/checkmark.svg";

    export let id;
    export let labelText;


</script>

<label for={id} class=" w-full cursor-pointer relative mb-[18px] flex font-light opacity-90 text-[14px] items-center justify-center leading-[18px] placeholder-opacity-90">
    <input id={id} type="checkbox" class="peer w-[22px] h-[22px]  invisible" />
    <div
        class="absolute overflow-hidden top-0 left-0 bg-black peer-checked:[&>div]:animate-slideIn peer-checked:[&>img]:block border-2 w-[22px] h-[22px] rounded-md flex items-center justify-center"
    >
        <img
            src={Checkmark}
            class="hidden"
            alt=""
        />
        <div class="absolute w-[22px] h-[22px] left-[50px] bg-black"></div>
    </div>

    <span class="relative ml-[8px] w-full text-left peer-checked:line-through">{labelText}</span>
</label>

