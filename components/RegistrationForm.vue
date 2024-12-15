<template>
  <div class="bg-white rounded-lg shadow-xl p-8">
    <h3 class="text-2xl font-semibold text-gray-900 mb-6">Inscription</h3>
    <form @submit.prevent="onSubmit" class="space-y-6">
      <FormField 
        v-for="field in fields" 
        :key="field.id"
        v-model="form[field.id]"
        v-bind="field"
      />
      <button type="submit"
        class="w-full bg-indigo-600 text-white rounded-md py-3 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        S'inscrire maintenant
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRegistration } from '~/composables/useRegistration'

const { submitRegistration } = useRegistration()

const form = ref({
  name: '',
  email: '',
  company: ''
})

const fields = [
  { id: 'name', label: 'Nom complet', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'company', label: 'Entreprise', type: 'text' }
]

const onSubmit = async () => {
  await submitRegistration(form.value)
}
</script>