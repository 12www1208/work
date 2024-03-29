<script setup>
import { computed, reactive, ref } from 'vue';
import getMasDat from './../../helpers/getMasDat/getMasDat.js'


const props = defineProps({
    year: {
        type: Number,
        default: new Date().getFullYear()
    },
    month: {
        type: Number,
        default: new Date().getMonth()
    },
    day: {
        type: Number,
        default: new Date().getDate()
    },
    nameDayOfWeek: {
        type: Array,
        default: [
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Суб',
            'Вс'
        ],
        validator: function(value) {
            return value.length == 7
        }
    },
    nameMonth: {
        type: Array,
        default: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
        validator: function(value) {
            return value.length == 12
        }
    }
})

const emits = defineEmits(['getDay'])

const masDayOfWeek  = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Суб',
    'Вс'
]

const nameMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]

const data = reactive({
    year: props.year,
    month: props.month,
    day: props.day
})

const masDat = computed(() => {
    return getMasDat(data.year, data.month, data.day)
})

const getDay = (day) => {
    data.day = day
    emits('getDay', data)
}

const nextMonth = () => {
    if(data.month < 11) {
        data.month += 1
    } else {
        data.month = 0
        data.year += 1
    }
}

const downMonth = () => {
    if(data.month > 0) {
        data.month -= 1
    } else {
        data.month = 11
        data.year -= 1
    }
}

</script>

<template>
    <div class="calendar-wrapper">
        <div class="calendar-btn">
            <button @click="downMonth" >
                <
            </button>
            <h1>{{ nameMonth[data.month] }} {{ data.year }}</h1>
            <button @click="nextMonth" >
                >
            </button>
        </div>
        <table class="calnedar" >
            <tr>
                <td v-for="day in props.nameDayOfWeek" > {{ day }}</td>
            </tr>
            <tr v-for="week in masDat">
                <td v-for="item in week"  class="day"  :class="{'rightDay': item.rightDay}"  @click="getDay(item.day)" >
                    {{ item.day }}
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>

.calendar-wrapper {
    display: flex;
    flex-direction: column;
    width: 400px;
}

.calendar-btn {
    display: flex;
    justify-content: space-between;
}

.calendar-btn button {
    cursor: pointer;
    width: 20px;
}

.day {
    cursor: pointer;
}

.rightDay {
    border: solid blue 2px;
}

</style>