<template>
    <main>
        <section class="page page--reservations">
            <div class="page__wrapper">
                <div class="page__content">
                    <h1 class="page__title">Панель администратора</h1>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section__wrapper">
                    <p class="section__title">Создание бронирования</p>
                    <p class="section__description">Подтвердите данные или измените их по требованию гостя. Укажите свободный столик и создайте бронирование с помощью кнопки.</p>
                    <form method="post" class="form form--booking">
                        <div class="form__row">
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="username" hidden>Ваше имя</label>
                                    <input type="text" required name="username" id="username" class="form__input" placeholder="Ваше имя">
                                </div>
                            </div>
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="phone" hidden>Номер телефона</label>
                                    <input type="text" required name="phone" id="phone" class="form__input" placeholder="Номер телефона">
                                </div>
                            </div>
                        </div>
                        <div class="form__row">
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="count" hidden>Количество гостей</label>
                                    <input type="number" min="1" required name="count" id="count" class="form__input" placeholder="Количество гостей">
                                </div>
                            </div>
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="table" hidden>Номер столика</label>
                                    <input type="number" required name="table" id="table" class="form__input" placeholder="Номер столика">
                                </div>
                            </div>
                        </div>
                        <div class="form__row">
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="date" hidden>Дата</label>
                                    <input type="date" required name="date" id="date" class="form__input" placeholder="Дата">
                                </div>
                            </div>
                            <div class="form__column">
                                <div class="form__field">
                                    <label for="time" hidden>Время</label>
                                    <input type="time" required name="time" id="time" class="form__input" placeholder="Время">
                                </div>
                            </div>
                        </div>
                        <TheSubmit>Создать бронирование</TheSubmit>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TheSubmit from '@/components/TheSubmit.vue'

export default {
    components: {
        TheSubmit
    }
}
</script>

<style>

</style>