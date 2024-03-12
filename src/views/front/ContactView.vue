<template>
    <div class="max-w-740px px-5 mx-a pt-9">
        <h2 class="font-size-14 lh-tight font-serif fw-bold tracking-wider mb-16">聯絡我們</h2>
        <h3 class="font-size-7 mb-7">有任何問題或建議，歡迎聯絡我們！<div
                class="i-fluent-emoji-flat:backhand-index-pointing-down inline-block"></div>
        </h3>
        <form action="" class="grid grid-cols-2 gap-4 md:gap-7 mb-25">
            <div class="custom-input-group position-relative col-span-2 md:col-span-1">
                <input type="text" id="name" placeholder="姓名"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3  rd-3  lh-none">
                <label for="name"
                    class="position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text">姓名</label>
            </div>
            <div class="custom-input-group position-relative  col-span-2 md:col-span-1">
                <input type="email" id="email" placeholder="Email"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3  rd-3 ">
                <label for="email"
                    class="position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text">Email</label>
            </div>
            <div class="custom-input-group position-relative col-span-2">
                <input type="tel" id="tel" placeholder="手機號碼"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3  rd-3">
                <label for="tel"
                    class="position-absolute w-[calc(50%-28px)] block top-0 left-0 z-2 p-4 hover:cursor-text ">手機號碼</label>
            </div>
            <div class="custom-input-group position-relative col-span-2">
                <textarea id="message" placeholder="留言" rows="6"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3  rd-4"></textarea>
                <label for="message"
                    class="position-absolute w-[calc(50%-28px)] block top-0 left-0 z-2 p-4 hover:cursor-text ">留言</label>
            </div>
            <div>
                <button
                    class="customBorder border-info bg-info text-secondary tracking-widest px-8 py-2 rd-100vh hover:(cursor-pointer transform-scale-105)">送出</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.custom-input-group {

    input,
    textarea {
        border-width: 2px;
    }

    input::placeholder,
    textarea::placeholder {
        color: transparent;
    }

    label {
        transition: transform .1s ease-in-out;
        user-select: none;
        color: rgba(61, 8, 27, 0.8);
    }

    input:focus~label,
    textarea:focus~label,
    textarea:not(:placeholder-shown)~label,
    input:not(:placeholder-shown)~label {
        transform: scale(0.8) translateY(-1rem) translateX(-2.35rem);
    }

    input:focus,
    textarea:focus {
        padding-top: 16px;
        padding-bottom: 8px;
    }

    input:hover,
    textarea:hover {
        outline: 1.5px solid #3D081B;
    }
}
</style>