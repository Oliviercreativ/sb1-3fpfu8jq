<template>
  <div class="flex items-center">
    <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>