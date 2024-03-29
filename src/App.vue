<script setup>
import { reactive } from 'vue';
import Calendar from './components/calendar/Calendar.vue';

const data = reactive({
  year: 2023,
  month: 3,
  day: 1
})

const getDay = (Data) => {
  data.year = Data.year
  data.month = Data.month
  data.day = Data.day
}


</script>

<template>
  <Calendar :year="data.year" :month="data.month" :day="data.day" @get-day="getDay" />
  <h1>Число на календаре Год: {{ data.year }} Месяц: {{ data.month }} День: {{ data.day }} </h1>
</template>