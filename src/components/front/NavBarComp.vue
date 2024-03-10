<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const modal = ref();
// 滾動前，距離頂端的距離
const lastScrollTop = ref(0);
const isShow = ref(true);// 是否顯示 Navbar

const details = ref();
const detailsIsOpen = ref(false);

function openModal() {
    stopRoll()
    modal.value.showModal()
}
function autoClose(e) {
    if (e.target.nodeName === 'DIALOG') {
        modal.value.close()
    }
}
function scrolling() {
    // 滾動到目前與頂端的距離
    let scrollTop = window.scrollY || window.pageYOffset;
    // 如果新的比較大表示往下滾動，則不要顯示 Navbar
    if (scrollTop > lastScrollTop.value && lastScrollTop.value > 124) {
        isShow.value = false;
    } else if (scrollTop < lastScrollTop.value) {
        isShow.value = true;
    }
    lastScrollTop.value = scrollTop; //將現在的距離紀錄，用於下次滾動
}
function stopRoll() {
    document.body.style.overflow = 'hidden';
}

function activeRoll() {
    document.body.style.overflow = '';
}

function toggleDetail(e) {
    // 如果點擊到開關的按鈕 或是外層
    if (e.target.dataset.type === 'button' || e.target.dataset.type === 'layer') {
        // 啟動關閉動畫並允許滾動
        if (details.value.hasAttribute('open')) {
            details.value.classList.add('closing');
            detailsIsOpen.value = false;
            activeRoll();
        } else { //啟動開啟動畫並禁止滾動
            details.value.classList.add('opening');
            details.value.setAttribute('open', '');
            detailsIsOpen.value = true;
            stopRoll();
        }
    }

}
function animating(e) {
    // 如果剛剛是關閉動畫，則移除 class 與 open標籤
    if (e.animationName.includes('close')) {
        details.value.classList.remove('closing')
        details.value.removeAttribute('open')
    } else if (e.animationName.includes('open')) { //如果是開啟動畫則移除 class
        details.value.classList.remove('opening')
    }
}

onMounted(() => {
    window.addEventListener('scroll', scrolling)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrolling)
})
</script>

<template>
    <div class="bg-info  py-2.5 flex justify-center">
        <span class="tracking-widest text-white">
            訂單滿千免運
        </span>
        <div class="i-fluent-emoji-flat:rocket inline-block ms-2"></div>
    </div>
    <nav class="bg-secondary sticky top-0 transition-top-400 z-4" :class="{ 'navbarHide': !isShow }">
        <div class="container py-5 px-4 sm:px-12.5 flex sm-gap-8">
            <!-- RWD漢堡選單 -->
            <div class="flex md:hidden items-center w-80px">
                <details class="md:hidden" ref="details" @click.prevent="toggleDetail">
                    <summary class="font-size-6 text-primary" v-if="details">
                        <div :class="detailsIsOpen ? 'i-material-symbols:close-rounded' : 'i-ic:baseline-menu'"
                            data-type="button">
                        </div>
                    </summary>
                    <!-- 側邊選單 -->
                    <div class="absolute left-0 top-88px w-100vw h-100vh z-2" data-type="layer">
                        <div class="sideNavbar absolute left-0 z-3 w-80vw flex flex-col  bg-secondary pt-14  border-(r-8 primary solid)"
                            @animationend="animating">
                            <ul class="mb-auto">
                                <li>
                                    <a href="#" class="block px-8 py-3 font-size-6 text-primary">點菜</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-8 py-3 font-size-6 text-primary">分類</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-8 py-3 font-size-6 text-primary">關於</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-8 py-3 font-size-6 text-primary">聯絡我們</a>
                                </li>
                            </ul>
                            <ul class="flex justify-center bg-primary-veryLight py-4 sticky bottom-0">
                                <li><a href="#" class="inline-block p-3 text-primary font-size-5">
                                        <div class="i-mdi:twitter hover:(transform-scale-120)"></div>
                                    </a></li>
                                <li><a href="#" class="inline-block p-3 text-primary font-size-5 ">
                                        <div class="i-ant-design:facebook-filled hover:(transform-scale-120)"></div>
                                    </a></li>
                                <li><a href="#" class="inline-block p-3 text-primary font-size-5 ">
                                        <div class="i-ph:instagram-logo-bold hover:(transform-scale-120)"></div>
                                    </a></li>
                                <li><a href="#" class="inline-block p-3 text-primary font-size-5 ">
                                        <div class="i-ic:baseline-tiktok hover:(transform-scale-120)"></div>
                                    </a></li>
                                <li><a href="#" class="inline-block p-3 text-primary font-size-5 ">
                                        <div
                                            class="i-material-symbols:mail-outline-rounded hover:(transform-scale-120)">
                                        </div>
                                    </a></li>
                            </ul>
                        </div>


                    </div>
                </details>
            </div>
            <!-- Logo -->
            <h1 class="py-2 mx-auto md:mx-0">
                <a href="#" class="text-primary flex items-center ">
                    <img src="@/assets/logo.png" alt="阿橘飯店Logo" class="w-100%">
                </a>
            </h1>
            <!-- PC選單 -->
            <ul class="hidden md:flex items-center gap-6 text-primary me-a ">
                <li class="">
                    <a href="#"
                        class="block py-3 text-primary font-size-4.5 opacity-75 hover:(opacity-100 underline underline-offset-6)">點菜</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-3 text-primary font-size-4.5 opacity-75 hover:(opacity-100 underline underline-offset-6)">分類</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-3 text-primary font-size-4.5 opacity-75 hover:(opacity-100 underline underline-offset-6)">關於</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-3 text-primary font-size-4.5 opacity-75 hover:(opacity-100 underline underline-offset-6)">聯絡我們</a>
                </li>
            </ul>
            <!-- 搜尋與購物車 -->
            <div class="flex gap-2">
                <button
                    class="bg-transparent border-0 outline-0 font-size-6 text-primary hover:(cursor-pointer scale-125)"
                    @click="openModal">
                    <div class="i-material-symbols:search "></div>
                </button>
                <button
                    class="bg-transparent border-0 outline-0 font-size-6 text-primary hover:(cursor-pointer scale-125)">
                    <div class="i-material-symbols:shopping-cart-outline "></div>
                </button>
            </div>
        </div>
    </nav>
    <!-- 搜尋的Modal -->
    <dialog ref="modal" @click="autoClose" class=" m-0 p-0 border-0 w-full max-w-full"
        :class="{ 'mt-9': lastScrollTop == 0 }" @touchmove.prevent @close="activeRoll">
        <div class="w-100%  bg-secondary flex justify-center items-center py-5">
            <form action="">
                <div class="custom-input-group">
                    <input type=" text" id="search" placeholder="搜尋">
                    <label for="search">搜尋料理</label>
                    <button
                        class="bg-transparent border-0 outline-0 font-size-6 text-primary hover:(cursor-pointer) absolute right-2  top-1/2 translate-y--1/2">
                        <div class="i-material-symbols:search "></div>
                    </button>
                </div>
            </form>
            <button type="button"
                class="text-primary font-size-8 bg-transparent border-0 outline-0 hover:(cursor-pointer opacity-50)"
                @click="modal.close()">
                <div class="i-material-symbols:close-rounded"></div>
            </button>
        </div>
    </dialog>
</template>

<style scoped lang="scss">
::backdrop {
    opacity: .5;
}

dialog[open] {
    animation: showDialog .5s ease-in-out;

    &::backdrop {
        background-color: #3D081B;
        animation: showBackdrop .5s ease-in-out;
    }
}


@keyframes showDialog {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes showBackdrop {
    from {
        opacity: 0;
    }

    to {
        opacity: .5;
    }
}

.navbarHide {
    top: -128px;
}



.custom-input-group {
    position: relative;

    &::before {
        content: "";
        inset: 0;
        position: absolute;
        border: #3D081B 1px solid;
        border-radius: .75rem;
        box-shadow: 0px 2px 0px #3D081B;
        pointer-events: none;
    }

    input {
        background-color: #F2EFDD;
        border-radius: .75rem;
        color: #3D081B;
        width: 25rem;
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 16px;
        outline: 0;

        &:focus {
            padding-top: 18px;
            padding-bottom: 10px;
            outline: #3D081B 1.5px solid;
        }

        &:hover {
            outline: #3D081B 1.5px solid;
        }
    }


    input::placeholder {
        color: transparent
    }

    label {
        position: absolute;
        transition: transform .1s ease-in-out;
        color: #3D081B;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    input:focus~label,
    input:not(:placeholder-shown)~label {
        color: #3D081B;
        transform: scale(0.8) translateY(-1.75rem) translateX(-0.25rem);
    }
}

summary::marker {
    content: '';
    list-style: none;
}

summary::-webkit-details-marker {
    display: none;
}

details.opening .sideNavbar {
    animation: open .2s ease-in-out
}

details.closing .sideNavbar {
    animation: close .2s ease-in-out
}

.sideNavbar {
    height: calc(100vh - 88px);

}

@keyframes open {
    from {
        left: -80vw
    }

    to {
        left: 0
    }
}

@keyframes close {
    from {
        left: 0
    }

    to {
        left: -80vw
    }
}
</style>