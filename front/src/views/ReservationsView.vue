<template>
    <main>
        <section class="page page--reservations">
            <div class="page__wrapper">
                <div class="page__content">
                    <h1 class="page__title">Панель администратора</h1>
                </div>
            </div>
        </section>
        <section class="section section--reservation">
            <div class="container">
                <div class="section__wrapper">
                    <p class="section__title">Список бронирований</p>
                    <p class="section__description">Ознакомьтесь с информаций о текущих бронированиях и управляйте бронированиями с возможностью завершить или отменить бронирование.</p>
                    <div class="filters">
                        <form method="post" class="form form--filters">
                            <div class="form__row">
                                <div class="form__column">
                                    <div class="form__field">
                                        <label for="search" hidden>Запрос</label>
                                        <input type="text" required name="search" id="username" class="form__input" placeholder="Запрос">
                                    </div>
                                </div>
                                <div class="form__column">
                                    <TheSubmit subclass="filters__button">Поиск</TheSubmit>
                                </div>
                            </div>
                        </form>
                        <div class="form">
                            <div class="form__row">
                                <div class="form__column">
                                    <div class="form__field">
                                        <select name="filter" id="filter" class="form__input">
                                            <option value="" selected>Выберите категорию</option>
                                            <option
                                                v-for="(category, i) in categories"
                                                :key="i"
                                                :value="i"
                                            >
                                                {{category}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form__column">
                                    <select name="filter" id="filter" class="form__input">
                                        <option value="1">По количеству мест</option>
                                        <option value="2">По количеству мест (убывание)</option>
                                        <option value="3">По ID</option>
                                        <option value="4">По ID (убывание)</option>
                                    </select>
                                </div>
                                <div class="form__column">
                                    <TheSubmit subclass="filters__button">Применить</TheSubmit>
                                </div>
                            </div>
                            <div class="form__row">
                                <TheButton to="/reservations/new" subclass="filters__button">Добавить бронирование</TheButton>
                            </div>
                        </div>
                    </div>
                    <div class="reservations">
                        <div
                            v-for="reservation in reservations"
                            :key="reservation.id"
                            class="reservation"
                        >
                            <p class="reservation__datetime">{{ reservation.visit_date }}, {{ reservation.visit_time }}</p>
                            <p class="reservation__author">{{ reservation.client }}</p>
                            <p class="reservation__table">Столик #{{ reservation.table }}</p>
                            <p class="reservation__count">{{ reservation.count }} человек(a)</p>
                            <p class="reservation__phone">Телефон: {{ reservation.phone }}</p>
                            <TheButton :to="'/reservations/' + reservation.id" subclass="reservation__button">Просмотреть бронирование</TheButton>
                            <TheButton to="#" subclass="reservation__button">Отменить бронирование</TheButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TheButton from '@/components/TheButton.vue'
import TheSubmit from '@/components/TheSubmit.vue'

export default {
    components: {
        TheButton, TheSubmit
    },
    data() {
        return {
            reservations: [],
            categories: [
                "Category #1",
                "Category #2"
            ]
        }
    },
    methods: {
        getProperty() {
            return 1;
        }
    },
    async mounted() {
        const response = await fetch('/reservations.json');
        const data = await response.json();

        this.reservations = data;
    }
}
</script>

<style>
    .page--reservations {
        background-image: url("@/assets/images/gallery.jpg");
    }

    .reservations {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
    }

    .reservation {
        width: calc(33% - 20px);
        background-color: #444444;
        color: #fff;
        padding: 15px;
    }

    .reservation__datetime {
        letter-spacing: 3px;
        font-size: 15px;
        margin-bottom: 10px;
    }

    .reservation__author {
        font-size: 28px;
        margin-bottom: 5px;
        font-family: "Playfair Display", serif;
    }

    .reservation__table {
        font-size: 28px;
        margin-bottom: 5px;
    }

    .reservation__count {
        font-size: 15px;
        color: #f1eaea;
        margin-bottom: 20px;
    }

    .reservation__button {
        text-align: center;
        padding: 10px;
        margin-top: 10px;
    }

    .form--filters {
        width: 100%;
    }

    .filters {
        width: 100%;
    }

    .filters__button {
        width: 100%;
        text-align: center;
    }
</style>
