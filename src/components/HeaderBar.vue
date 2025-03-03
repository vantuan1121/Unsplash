<script setup>
import logo from '@/assets/img/logo.jpg';
import SvgIcon from '@/components/SvgIcon.vue';
import MenuPages from '@/pages/MenuPages.vue';
// ===========
import { ref, onMounted, onUnmounted } from "vue";

// Trạng thái mở/đóng dropdown
const isOpen = ref(false);
const activeTab = ref("activity");
const dropdownRef = ref(null);

// Hàm bật/tắt dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Hàm kiểm tra nếu click ra ngoài dropdown thì ẩn nó
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

// Gắn sự kiện khi component được mount
onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

// Gỡ sự kiện khi component bị hủy
onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>


<template>
  <div class="sticky z-50 top-0 pt-4 bg-white ">
    <!--  -->
    <div class="flex">
      <!--  -->
      <div class="h-5 w-10">
        <img :src="logo" alt="Logo">
      </div>
      <!-- Thanh tìm kiếm  -->
      <div class="ml-5">
        <input v-model="searchQuery"
          class="h-[40px] w-[980px] rounded-full  bg-gray-200 pl-5 hover:bg-gray-300 focus:outline-none"
          placeholder="Search photo and illustratinons">
      </div>
      <!--  -->
      <div class="ml-5 flex gap-7 ">
        <div class="ml-5 mt-3 h-10 w-20">
          <router-link to="/GetUnsplash"
            class="whitespace-nowrap text-[14px] text-black transition active:scale-90 font-bold">
            Get Unsplash+
          </router-link>

          <GetUnsplash v-if="showComponent" />
        </div>
        <!--  -->
        <div class="ml-5 mt-2 h-10 w-20 ">
          <button
            class=" h-[30px] w-[120px] whitespace-nowrap rounded-md border-2 text-[14px] text-[#767676] hover:border-black hover:text-black transition active:scale-90">
            Submit in image
          </button>
        </div>
      </div>
      <!--  -->
      <div class="mb-[3px] ml-[80px] flex gap-5  ">
        <!-- ============ -->

        <div ref="dropdownRef" class="relative">
          <!-- Nút chuông -->
          <button class="mt-[9px] transition active:scale-90" @click="toggleDropdown">
            <SvgIcon name="chuong" width="32px" height="32px" />
          </button>

          <!-- Hiệu ứng -->
          <Transition enter-active-class="transition duration-300 ease-out transform"
            enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in transform" leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0">
           <!-- Dropdown thông báo -->
            <div v-if="isOpen" class="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
              <!-- Tabs: Activity & Highlights -->
              <div class="flex border-b">
                <button @click="activeTab = 'activity'"
                  :class="['w-1/2 py-2 text-center', activeTab === 'activity' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black']">
                  Activity
                </button>
                <button @click="activeTab = 'highlights'"
                  :class="['w-1/2 py-2 text-center', activeTab === 'highlights' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black']">
                  Highlights
                </button>
              </div>

              <!-- Nội dung thông báo -->
              <div class="p-4 text-gray-600">
                <template v-if="activeTab === 'activity'">
                  <div class="text-center text-sm">
                    Activity associated with your
                    account will appear here.
                  </div>
                </template>
                <template v-else>
                  <div class="text-center text-sm">
                    Important news, product updates,
                    and milestones associated with your
                    account will appear here.
                  </div>
                </template>
              </div>
            </div>
          </Transition>
        </div>

        <!-- ================== -->
        <button class="transition active:scale-90" @click="handleClick">
          <SvgIcon name="use" width="32px" height="32px" />
        </button>
        <button class="transition active:scale-90" @click="handleClick">
          <SvgIcon name="3ngach" width="32px" height="32px" />
        </button>
      </div>
    </div>

    <!--  -->
    <MenuPages/>
  </div>
</template>
