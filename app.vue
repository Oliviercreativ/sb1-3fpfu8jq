<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-2xl font-bold text-indigo-600">Événement Entrepreneurs 2024</h1>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Propulsez Votre Entreprise vers le Succès
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Rejoignez-nous pour une journée exceptionnelle de networking, 
            de conférences inspirantes et d'ateliers pratiques.
          </p>
          <div class="space-y-4 text-gray-600">
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
              <span>Conférenciers de renom</span>
            </div>
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
              <span>Ateliers pratiques</span>
            </div>
            <div class="flex items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" />
              <span>Networking de qualité</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-xl p-8">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Inscription</h3>
          <form @submit.prevent="onSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
              <input type="text" id="name" v-model="form.name" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="form.email" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            </div>
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700">Entreprise</label>
              <input type="text" id="company" v-model="form.company" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            </div>
            <button type="submit"
              class="w-full bg-indigo-600 text-white rounded-md py-3 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              S'inscrire maintenant
            </button>
          </form>
        </div>
      </div>

      <div class="mt-20">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Informations pratiques</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <CalendarIcon class="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 class="text-lg font-semibold mb-2">Date</h4>
            <p class="text-gray-600">15 Juin 2024</p>
          </div>
          <div class="text-center">
            <MapPinIcon class="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 class="text-lg font-semibold mb-2">Lieu</h4>
            <p class="text-gray-600">Centre de Conférences, Paris</p>
          </div>
          <div class="text-center">
            <TicketIcon class="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h4 class="text-lg font-semibold mb-2">Tarif</h4>
            <p class="text-gray-600">299€ par personne</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon, CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/vue/24/solid'

const form = ref({
  name: '',
  email: '',
  company: ''
})

const onSubmit = () => {
  // Ici, vous pouvez ajouter la logique pour traiter le formulaire
  console.log('Formulaire soumis:', form.value)
  alert('Merci pour votre inscription! Nous vous contacterons bientôt.')
}
</script>