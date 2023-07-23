<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

// props from the router params
const props = defineProps({
  id: { type: String, require: true }
})

const event = ref(null)

onMounted(() => {
  EventService.getEventById(props.id).then(res => event.value = res.data).catch(err => console.log(err))
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

