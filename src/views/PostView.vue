<template>
   <div>Post View del elemento: {{ postId }}</div>
</template>

<script setup>
   import { onMounted, ref } from 'vue';
   import { useRoute } from 'vue-router'; //informacion de la ruta
   
   let postId = ref('')

   onMounted(() => {
      const route = useRoute()
      postId.value = route.params.id
   })

</script>
