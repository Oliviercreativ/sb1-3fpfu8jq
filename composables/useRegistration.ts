import { ref } from 'vue'

export function useRegistration() {
  const isLoading = ref(false)
  const error = ref(null)

  const submitRegistration = async (formData) => {
    isLoading.value = true
    error.value = null
    
    try {
      // Ici, vous pouvez ajouter l'appel API pour enregistrer l'utilisateur
      console.log('Formulaire soumis:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulation d'appel API
      alert('Merci pour votre inscription! Nous vous contacterons bientôt.')
    } catch (e) {
      error.value = 'Une erreur est survenue lors de l\'inscription'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    submitRegistration
  }
}