<template>
  <div>
    <h2 class="text-4xl font-bold text-gray-900 mb-6">
      Propulsez Votre Entreprise vers le Succès
    </h2>
    <p class="text-xl text-gray-600 mb-8">
      Rejoignez-nous pour une journée exceptionnelle de networking, 
      de conférences inspirantes et d'ateliers pratiques.
    </p>
    <div class="space-y-4 text-gray-600">
      <FeatureItem v-for="feature in features" :key="feature" :text="feature" />
    </div>
  </div>
</template>

<script setup>
const features = [
  'Conférenciers de renom',
  'Ateliers pratiques',
  'Networking de qualité'
]
</script>