<script>
    import Plus from "../assets/plus-sign.svg";

    let visible = false;

    function toggleVissible() {
        visible = !visible
    }



</script>

<div class="{visible ? 'active' : ''} hidden [&.active]:block absolute top-0 left-0 h-screen w-screen " on:click={toggleVissible}></div>

<div
    class="{visible ? 'active' : ''} group bg-white w-auto h-auto  absolute bottom-[20px]  overflow-hidden right-[20px]  rounded-[13px] flex items-start justify-start"
>

    <div class="w-[180px] h-full p-[3px] gap-[3px] hidden grid-rows-2 grid-cols-2 group-[.active]:grid">
        <input
            class=" col-span-2 h-[30px] px-[8px] text-[12px] rounded-[10px] bg-black"
            type="text"
            placeholder="finish..."
        />
        <div
            class="grid-cols-1 h-[30px] px-[8px] rounded-[10px] bg-black flex justify-between items-center"
        >
            <button class="w-[14px] h-[14px] bg-[#96AED0] rounded-full"></button>
            <button class="w-[14px] h-[14px] bg-[#ECEBBD] rounded-full"></button>
            <button class="w-[14px] h-[14px] bg-[#D79FC7] rounded-full"></button>
        </div>
        <select
            class="col-span-1  text-[10px] bg-black rounded-[10px]"
        >
            <option selected>list</option>
            <option>work</option>
            <option>personal</option>
        </select>
    </div>

    <button
            on:click={toggleVissible}
        class="col-span-1 w-[40px] h-[40px] flex items-center justify-center"
    >
        <img src={Plus} alt="" />
    </button>
</div>
