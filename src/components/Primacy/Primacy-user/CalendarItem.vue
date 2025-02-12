<template>
    <div class="calendar">
        <div class="box__calendar">
            <div class="calendar-header">
                <div class="btn" @click="prevMonth">
                    <v-icon name="md-keyboarddoublearrowleft-twotone" scale="2" color="#080" class="icon" />
                </div>
                <span>{{ currentMonthName }} {{ currentYear }}</span>
                <div class="btn" @click="nextMonth">
                    <v-icon name="md-keyboarddoublearrowright" scale="2" color="#080" class="icon" />
                </div>
            </div>
            <div class="calendar-body">
                <div class="day-name" v-for="day in dayNames" :key="day">{{ day }}</div>
                <div class="day" v-for="day in days" :key="day.date" :class="{ 'current-day': isToday(day.date) }">
                    {{ day.date.getDate() }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const today = new Date();

const currentDate = ref(new Date());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const days = computed(() => {
    const daysArray = [];
    const totalDays = daysInMonth(currentMonth.value, currentYear.value);
    const firstDay = firstDayOfMonth(currentMonth.value, currentYear.value);

    for (let i = 0; i < firstDay; i++) {
        daysArray.push({ date: new Date(currentYear.value, currentMonth.value, i - firstDay + 1) });
    }

    for (let i = 1; i <= totalDays; i++) {
        daysArray.push({ date: new Date(currentYear.value, currentMonth.value, i) });
    }

    return daysArray;
});

const prevMonth = () => {
    currentDate.value.setMonth(currentMonth.value - 1);
    currentDate.value = new Date(currentDate.value);
};

const nextMonth = () => {
    currentDate.value.setMonth(currentMonth.value + 1);
    currentDate.value = new Date(currentDate.value);
};

const isToday = (date) => {
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};

const currentMonthName = computed(() => today.toLocaleString('default', { month: 'long' }));
</script>

<style scoped>
.calendar {
    width: 500px;
    height: 100vh;
    /* margin: 50px auto; */
    text-align: center;
    /* border: 2px solid #46B346; */
    background-color: rgba(70, 179, 70, 0.5);
    backdrop-filter: blur(15px);
    padding: 50px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    /* border-radius: 5px; */
}

.box__calendar {
    width: 100%;
    height: 100vh;
    margin-top: 20px;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #fff;
}

.calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: #fff;
}

.day-name,
.day {
    padding: 10px;
}

.current-day {
    background-color: #7ce251;
    color: white;
    border-radius: 50%;
}

@media screen and (max-width: 1024px) {
    .calendar {
        width: 400px;
        height: 100vh;
        background-color: rgba(70, 179, 70, .8);
        backdrop-filter: blur(20px);
        padding: 5px 20px 0 20px;
    }
}

@media screen and (max-width: 800px) {
    .calendar {
        width: 350px;
        height: 740px;
        padding: 50px 20px 0 20px;
    }
}
</style>