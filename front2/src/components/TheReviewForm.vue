<template>
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
            <div class="form__field">
                    <label for="date" hidden>Дата</label>
                    <input type="date" required name="date" id="date" class="form__input" placeholder="Дата">
            </div>
        </div>
        <div class="form__row">
            <div class="form__field">
                <textarea name="message" id="message" cols="30" rows="10" class="form__input form__input--textarea" required placeholder="Ваш отзыв"></textarea>
            </div>
        </div>
        <TheSubmit>Отправить</TheSubmit>
    </form>
</template>

<script>
import TheSubmit from '@/components/TheSubmit'

export default {
    components: {
        TheSubmit
    }
}
</script>

<style>

</style>