<script setup>
import { defineProps } from 'vue';

defineProps({

  name: String,
  width: {
    type: String,
    default: '24px',
  },
  height: {
    type: String,
    default: '24px',
  },
});
</script>

<template>
  <img
    :src="getSvgPath(name)"
    :width="width"
    :height="height"
    alt="icon"
  >
</template>

<script>
const getSvgPath = (name) => new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
</script>
