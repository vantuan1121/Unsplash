<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// Danh sách tài khoản
const accounts = ref([
  { username: "user", password: "12345678", email: "user@example.com", isLocked: false },
  { username: "user1", password: "112345678", email: "user1@example.com", isLocked: false },
  { username: "user2", password: "212345678", email: "user2@example.com", isLocked: false },
  { username: "user3", password: "312345678", email: "user3@example.com", isLocked: false },
  { username: "user4", password: "412345678", email: "user4@example.com", isLocked: false },
]);

// Danh sách API
const apis = ref([
  { ACCESS_KEY: "A1UJotyoLfr-ymnVj3Dg2EWgw-9Fce6mDaBedZH-sWQ", endpoint: "https://api.unsplash.com", isActive: true },
]);

// Biến tìm kiếm
const searchQuery = ref("");

// Lọc danh sách theo từ khóa tìm kiếm
const filteredAccounts = computed(() => {
  return accounts.value.filter(account =>
    account.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    account.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Điều hướng router
const router = useRouter();

// Hàm đăng xuất
const logout = () => {
  localStorage.removeItem("loggedInUser");
  router.push("/").then(() => {
    window.location.reload();
  });
};

// Hàm khóa/mở khóa tài khoản
const toggleLockAccount = (index) => {
  accounts.value[index].isLocked = !accounts.value[index].isLocked;
};

// Hàm xóa tài khoản (có xác nhận)
const deleteAccount = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) {
    accounts.value.splice(index, 1);
  }
};

// Hàm bật/tắt API
const toggleApiStatus = (index) => {
  apis.value[index].isActive = !apis.value[index].isActive;
};

// Hàm xóa API
const deleteApi = (index) => {
  if (confirm("Bạn có chắc chắn muốn xóa API này không?")) {
    apis.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="p-6">
    <!-- Tiêu đề -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Quản lý tài khoản</h1>
      <div class="flex gap-4">
        <router-link to="/IndexPages">
          <div class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-red-600 transition">Website</div>
        </router-link>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Đăng xuất
        </button>
      </div>
    </div>

    <!-- Ô tìm kiếm -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Tìm kiếm tài khoản..."
      class="border p-2 rounded w-64 mb-4"
    />

    <!-- Bảng danh sách tài khoản -->
    <table class="w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Tài khoản</th>
          <th class="border p-2">Mật khẩu</th>
          <th class="border p-2">Gmail</th>
          <th class="border p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(account, index) in filteredAccounts" :key="index" class="text-center hover:bg-gray-100 transition">
          <td class="border p-2">{{ account.username }}</td>
          <td class="border p-2">{{ account.password }}</td>
          <td class="border p-2">{{ account.isLocked ? "Tài khoản bị khóa" : account.email }}</td>
          <td class="border p-2">
            <button
              @click="toggleLockAccount(index)"
              class="px-3 py-1 rounded text-white"
              :class="account.isLocked ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'">
              {{ account.isLocked ? "Mở khóa" : "Khóa" }}
            </button>
            <button
              @click="deleteAccount(index)"
              class="ml-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Bảng quản lý API -->
    <h2 class="text-xl font-bold mb-2">Quản lý API</h2>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ACCESS_KEY</th>
          <th class="border p-2">Endpoint</th>
          <th class="border p-2">Trạng thái</th>
          <th class="border p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(api, index) in apis" :key="index" class="text-center hover:bg-gray-100 transition">
          <td class="border p-2">{{ api.ACCESS_KEY }}</td>
          <td class="border p-2">{{ api.endpoint }}</td>
          <td class="border p-2">{{ api.isActive ? "Hoạt động" : "Tắt" }}</td>
          <td class="border p-2">
            <button
              @click="toggleApiStatus(index)"
              class="px-3 py-1 rounded text-white"
              :class="api.isActive ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500'">
              {{ api.isActive ? "Tắt" : "Bật" }}
            </button>
            <button
              @click="deleteApi(index)"
              class="ml-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
