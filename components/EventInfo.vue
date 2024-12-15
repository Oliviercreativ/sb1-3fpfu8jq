<template>
  <div class="mt-20">
    <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Informations pratiques</h3>
    <div class="grid md:grid-cols-3 gap-8">
      <InfoCard
        v-for="info in eventInfo"
        :key="info.title"
        v-bind="info"
      />
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/vue/24/solid'

const eventInfo = [
  {
    icon: CalendarIcon,
    title: 'Date',
    content: '15 Juin 2024'
  },
  {
    icon: MapPinIcon,
    title: 'Lieu',
    content: 'Centre de Conférences, Paris'
  },
  {
    icon: TicketIcon,
    title: 'Tarif',
    content: '299€ par personne'
  }
]
</script>