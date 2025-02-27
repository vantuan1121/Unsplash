<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Bg from '@/assets/img/bg.jpg';
import xlogo from '@/assets/img/xlogo.png';
import logoicon from '@/assets/img/logoicon.png';
</script>

<script>

import { ref } from 'vue';

const isOpen = ref(false);
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);
</script>

<template>
  <HeaderBar />
  <!--  -->
  <div class="mt-[30px] text-[50px] font-bold   ">
    <p class="text-center  ">
      One simple plan unlocks everything.
    </p>
    <p class="text-center ">
      No bundles. No add-ons.
    </p>
  </div>
  <!-- thanh trượt  -->
  <label for="filter"
    class="relative flex w-fit cursor-pointer select-none items-center rounded-full bg-[#afb1b4] p-1 mx-auto mt-[50px] ">
    <input type="checkbox" id="filter" class="peer hidden" />
    <span class="px-4 py-2 text-white transition-opacity duration-300 ease-in-out peer-checked:opacity-50   ">
      Yearly (66% off)
    </span>
    <span class="px-4 py-2 text-white transition-opacity duration-300 ease-in-out opacity-50 peer-checked:opacity-100">
      Monthly
    </span>
    <span
      class="absolute inset-y-1 left-1 w-1/2 rounded-full bg-[rgba(253,253,253,0.65)] shadow-md transition-all duration-500 ease-[cubic-bezier(0.47,1.64,0.41,0.8)] peer-checked:left-1/2">
    </span>
  </label>
  <!--Bảng giá đăng ký dịch vụ  -->
  <div class="w-[400px] h-[400px] rounded-xl border-2 mx-auto mt-[50px]">
    <div class="mt-[35px]">
      <div class="ml-[25px]">
        <p class="w-[180px] border rounded-full bg-green-100 text-green-500 font-bold text-[15px] text-center">
          Limited Launch Special1
        </p>
        <p class="text-4xl font-bold text-gray-300 line-through">
          $12
        </p>
      </div>
      <!--  -->
      <div class="space-y-1 mt-[20px] font-bold ml-[25px]">
        <p class="flex gap-2">
          <SvgIcon name="daucong" width="15px" height="15px" />
          Members-only content added monthly
        </p>
        <p class="flex gap-2">
          <SvgIcon name="daucong" width="15px" height="15px" />
          Unlimited royalty-free downloads
        </p>
        <div class="flex">
          <p class="flex gap-2">
            <SvgIcon name="daucong" width="15px" height="15px" />
            Illustrations
          </p>
          <div
            class="border-0 w-[40px] h-[20px] rounded-xl bg-sky-100 text-sky-500 ml-2 flex items-center justify-center mt-[2px]">
            new
          </div>
        </div>
        <p class="flex gap-2">
          <SvgIcon name="daucong" width="15px" height="15px" />
          Enhanced legal protections
        </p>
        <p class="flex gap-2">
          <SvgIcon name="daucong" width="15px" height="15px" />
          Ad-free experience
        </p>
        <p class="flex gap-2">
          <SvgIcon name="daucong" width="15px" height="15px" />
          Priority support
        </p>
      </div>
      <!-- Nút Bấm -->
      <div class="flex flex-col items-center mt-[25px]">
        <button
          class=" h-[50px] w-[9cm] border-2 bg-black text-white rounded-[10px] hover:bg-black/80 transition duration-300">
          Get Unsplash+
        </button>
        <!--  -->
        <div class="flex scale-75 gap-7">
          <p class="flex gap-2">
            <SvgIcon name="dautich" width="15px" height="15px" />
            Renews automatically
          </p>
          <p class="flex gap-2">
            <SvgIcon name="dautich" width="15px" height="15px" />
            Cancel anytime
          </p>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
  </div>
  <!--  -->
  <div>
    <p class="font-bold text-[50px] text-center whitespace-nowrap mt-[100px]">
      Why go Unsplash+
    </p>
  </div>
  <div class="w-[35cm] mt-10 mx-auto">
    <img :src="Bg" alt="bg">
  </div>
  <!--  -->
  <div class="flex justify-center">
    <p class="font-bold text-[50px] mt-[60px]">
      More with Unsplash+
    </p>
  </div>
  <div class="flex justify-center">
    <p class="text-2xl">
      Get access to member-only content to use how and when you want.
    </p>
  </div>
  <!--  -->
  <label for="filter2"
    class="relative flex w-fit cursor-pointer select-none items-center rounded-full bg-[#afb1b4] p-1 mx-auto mt-[50px] ">
    <input type="checkbox" id="filter2" class="peer hidden" />
    <span class="px-4 py-2 text-white transition-opacity duration-300 ease-in-out peer-checked:opacity-50   ">
      Sports
    </span>
    <span class="px-4 py-2 text-white transition-opacity duration-300 ease-in-out opacity-50 peer-checked:opacity-100">
      Illustrations
    </span>
    <span
      class="absolute inset-y-1 left-1 w-1/2 rounded-full bg-[rgba(253,253,253,0.65)] shadow-md transition-all duration-500 ease-[cubic-bezier(0.47,1.64,0.41,0.8)] peer-checked:left-1/2">
    </span>
  </label>
  <!--  -->
  <div class="  border-0 bg-zinc-50 h-[20cm] mt-[4cm] overflow-hidden">
    <div class="flex gap-30 mt-[4cm] ml-[5cm]">
      <div class="">
        <p class="text-[30px] font-bold">
          Frequently asked questions
        </p>
        <p>Haven’t found what you’re looking for? <br>
          Try our Help Center — we’re here to help.
        </p>
      </div>
      <!--  -->
      <div class="">
        <div class="w-[17cm] mx-auto border-b">
          <button @click="isOpen = !isOpen" class="flex justify-between w-full text-left font-bold text-lg py-3">
            What is Unsplash+?
            <span :class="{ 'rotate-90': isOpen }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen" class="mt-3 text-gray-700">
            Unsplash+ is a subscription-based content provider that gives you access to additional <br>
            beautiful images, with no download cap. Plus members get access to unique images, <br>
            royalty-free usage, and expanded legal protections.
          </div>
        </div>
        <!-- ================ -->
        <div class="w-[17cm] mx-auto border-b">
          <button @click="isOpen1 = !isOpen1" class="flex justify-between w-full text-left font-bold text-lg py-3">
            How do I sign up for a Unsplash+ subscription?
            <span :class="{ 'rotate-90': isOpen1 }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen1" class="mt-3 text-gray-700">
            Signing up for a subscription is simple. Click on the 'Get Unsplash+' button on this page!
          </div>
        </div>
        <!-- ================ -->
        <div class="w-[17cm] mx-auto border-b">
          <button @click="isOpen2 = !isOpen2" class="flex justify-between w-full text-left font-bold text-lg py-3">
            Can I pause, deactivate or reactivate my subscription?
            <span :class="{ 'rotate-90': isOpen2 }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen2" class="mt-3 text-gray-700">
            You have the freedom to change your plan or cancel your next subscription renewal <br>
            online at any time. This can be done by going to your Account Settings and clicking <br>
            'Manage my subscription'.
          </div>
        </div>
        <!-- ================ -->
        <div class="w-[17cm] mx-auto border-b">
          <button @click="isOpen3 = !isOpen3" class="flex justify-between w-full text-left font-bold text-lg py-3">
            How can I use the images? Are there any restrictions?
            <span :class="{ 'rotate-90': isOpen3 }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen3" class="mt-3 text-gray-700">
            All Unsplash+ images are model and property released and are backed by <br>
            Unsplash+ Protection.
          </div>
        </div>
        <!-- ==================== -->
        <div class=" w-[17cm] mx-auto border-b">
          <button @click="isOpen4 = !isOpen4" class="flex justify-between w-full text-left font-bold text-lg py-3">
            Will I be charged in my local currency?
            <span :class="{ 'rotate-90': isOpen4 }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen4" class="mt-3 text-gray-700">
            If you’re based in the United States, Canada, the United Kingdom or the European Union,<br>
            yes. For all other regions, you will be charged in either euros or US dollars.
          </div>
        </div>
        <!-- ================== -->
        <div class="w-[17cm] mx-auto border-b">
          <button @click="isOpen5 = !isOpen5" class="flex justify-between w-full text-left font-bold text-lg py-3">
            Can I share my subscription with someone else?
            <span :class="{ 'rotate-90': isOpen5 }" class="transform transition-transform">&#9656;</span>
          </button>
          <div v-if="isOpen5" class="mt-3 text-gray-700">
            No, the subscription is for a single-user license only. Only the owner of the account has <br>
            the right to use the image. A company can have an account, but it is still a single seat- <br>
            license, meaning only 1 person can download and select content/use the content at a <br>
            time, and it cannot be stored on a DAM for broad sharing rights.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
  <div class=" ml-[3cm] text-xs whitespace-nowrap mt-[1cm] flex flex-col space-y-2 ">
    <span class="relative before:content-['1.'] before:absolute before:-left-3 ">
      Limited Launch Special pricing is subject to change without notice; subsequent renewal fees at promotional pricing
      are <br>
      not guaranteed. Adjusted pricing will only apply to subsequent renewal periods. Individual Rates will not increase
      <br>
      during an active subscription billing period.'<br>
    </span>
    <span class="relative before:content-['2.'] before:absolute before:-left-3">Plus taxes where applicable.</span>
  </div>
  <!--  -->
  <div class="mt-[2cm] ml-[3cm]">
    <p class="text-[30px] font-bold">Unsplash</p>
  </div>
  <!--  -->
  <div class="ml-[3cm]">
    <div class="flex gap-9 mt-[1cm] ">
      <div class="flex flex-col space-y-2">
        <a href="" class="text-gray-500 hover:text-black">
          About
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Blog
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Community
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Join the team
        </a>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="" class="text-gray-500 hover:text-black">
          Developers/API
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Press
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Help Center
        </a>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="" class="text-gray-500 hover:text-black">
          Unsplash Awards
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Unsplash for Education
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Unsplash for iOS
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Apps & Plugins
        </a>
        <a href="" class="text-gray-500 hover:text-black">
          Unsplash Studio
        </a>
      </div>
      <!--  -->
      <div class="flex ml-[18cm]">
        <div>
          <a href="https://x.com/unsplash?utm_medium=referral&utm_source=unsplash" target="_blank" class="block">
            <img :src="xlogo" alt="xlogo" class="h-10 w-10">
          </a>
        </div>
        <div class="mt-[10px]">
          <a href="https://www.facebook.com/unsplash/?utm_medium=referral&utm_source=unsplash#" target="_blank"
            class="block">
            <SvgIcon name="facebook" class="h-5 w-10" />
          </a>
        </div>
        <div class="mt-[10px]">
          <a href="https://www.instagram.com/unsplash/?utm_medium=referral&utm_source=unsplash" target="_blank"
            class="block">
            <SvgIcon name="instagram" class="h-5 w-10" />
          </a>
        </div>
      </div>
    </div>
    <div class="w-[34.5cm] border-b-2 mt-[60px]"></div>
  </div>
  <!--  -->
  <div class="flex gap-200 ml-[3cm] mt-[30px] space-y-20">
    <div class="flex">
      <img :src="logoicon" alt="logoicon" class="h-7 w-7">
      <p class="ml-[10px]">Make something awesome, Van</p>
    </div>
    <div class="flex gap-5">
      <p>Privacy Policy</p>
      <p>Terms</p>
      <p>Security</p>
    </div>
  </div>
</template>
