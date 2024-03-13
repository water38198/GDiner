<template>
    <div class="container px-12.5 pb-16">
        <section class="pt-6">
            <div class="mb-8">
                <h2 class="flex items-center font-size-12 lh-tight font-serif mb-6">初來乍到 <div
                        class="i-iconamoon:question-mark-circle inline-block "></div>
                </h2>
                <p class="max-w-2/3 font-size-4.5 lh-normal">親愛的客人，
                    我們非常榮幸能夠歡迎您來到阿橘飯店！在這裡，我們致力於為您提供一個美味、舒適和難忘的美味饗宴，讓您的每一口都成為一段珍貴的回憶。如果您是第一次光臨本店，我們推薦您點餐的內容包含：
                </p>
            </div>
            <div class="mb-16">
                <ul class="list-inside list-circle grid gap-4 font-size-5">
                    <li>沙拉：1</li>
                    <li>副食：1 ~ 2</li>
                    <li>主食：1</li>
                    <li>甜點：1</li>
                    <li>飲料：0 ~ 1</li>
                </ul>
            </div>
        </section>
        <section class="pt-6">
            <div class="mb-8">
                <h2 class="flex items-center font-size-12 lh-tight font-serif mb-6">近期上新<div
                        class="i-ic:round-whatshot inline-block"></div>
                </h2>
                <p class="max-w-70% font-size-4.5 lh-normal">
                    阿橘飯店每季都會固定更新菜單，以符合當季盛產的食材，每道新的料理都是阿橘師通經過無數次試驗，反覆調整食材搭配而成，絕對是令人驚豔的美味。
                </p>
            </div>
            <div class="mb-16">
                <ul class="grid grid-cols-2   lg:grid-cols-4 gap-4">
                    <li v-for="i in 4" :key="i + 123">
                        <div class="card">
                            <a href="#" class="block">
                                <div class="card-image">
                                    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" class="block h-150px w-100% md:h-250px">
                                </div>
                                <h3 class="mb-4  tracking-wider">好吃蔥油餅</h3>
                                <div class="pb-4">
                                    <span>NT$ 200</span>
                                </div>
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
        <section class="pt-6">
            <div class="mb-8">
                <h2 class="flex items-center font-size-12 lh-tight font-serif mb-6">套餐推薦<div
                        class="i-material-symbols:menu-book-outline inline-block"></div>
                </h2>
                <p class="max-w-70% font-size-4.5 lh-normal">
                    為您推薦阿橘飯店的經典套餐，每種套餐組合都由阿橘師嚴格把關，讓阿橘師帶領您體驗一段美食風暴。
                </p>
            </div>
            <div class="mb-16">
                <ul class="grid grid-cols-2   lg:grid-cols-4 gap-4">
                    <li v-for="i in 4" :key="i + 123">
                        <div class="card">
                            <a href="#" class="block">
                                <div class="card-image">
                                    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" class="block h-150px w-100% md:h-250px">
                                </div>
                                <h3 class="mb-4 tracking-wider">好吃蔥油餅</h3>
                                <div class="pb-4">
                                    <span>NT$ 200</span>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="pt-6">
            <h2 class="font-size-12 lh-tight font-serif mb-6">還是很餓？
            </h2>
            <div class="grid grid-cols-2">
                <div class="card">
                    <RouterLink to="/products" class="block">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" class="block h-150px w-100% md:h-250px">
                        </div>
                        <h4 class="mb-4 font-size-4.5 tracking-wider flex ">其他料理<div
                                class="i-material-symbols:arrow-right-alt inline-block icon">
                            </div>
                        </h4>
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="postcss" scoped>
.card {
    .card-image {
        @apply rd-3 customBorder-xl bg-primary overflow-hidden mb-4;

    }

    img {
        transition: all .5s ease-in-out;
        display: block;
    }

    .icon {
        transition: all .5s ease-in-out;
    }
}

.card:hover {
    img {
        transform: scale(1.1);
        transition: all .5s ease-in-out;
    }

    h3 {
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    .icon {
        transform: scaleX(1.5) translateX(0.1rem);
        transition: all .5s ease-in-out;
    }
}
</style>