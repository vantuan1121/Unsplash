import { createI18n } from 'vue-i18n';

// Định nghĩa các ngôn ngữ
const messages = {
  en: {
    welcome: 'Welcome to our website!',
    changeLanguage: 'Change Language',
  },
  vi: {
    welcome: 'Chào mừng bạn đến với trang web của chúng tôi!',
    changeLanguage: 'Đổi ngôn ngữ',
  },
};

// Khởi tạo i18n
const i18n = createI18n({
  locale: 'en', // Ngôn ngữ mặc định
  fallbackLocale: 'vi', // Ngôn ngữ dự phòng
  messages,
});

export default i18n;
