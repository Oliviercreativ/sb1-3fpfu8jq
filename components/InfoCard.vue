<template>
  <div class="text-center">
    <component :is="icon" class="h-12 w-12 text-indigo-600 mx-auto mb-4" />
    <h4 class="text-lg font-semibold mb-2">{{ title }}</h4>
    <p class="text-gray-600">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>