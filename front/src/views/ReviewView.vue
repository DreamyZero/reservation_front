<template>
  <main>
    <section class="page page--reviews">
        <div class="page__wrapper">
            <div class="page__content">
                <h1 class="page__title">Отзывы</h1>
                <p class="page__description">Мы собираем отзывы всех наших клиентов для повышения уровня сервиса. Узнайте больше о ресторане из историй гостей.</p>
            </div>
        </div>
    </section>
    <section class="section reviews">
        <div class="container">
            <div class="section__wrapper">
                <p class="section__title">Отзывы наших клиентов</p>
                <div class="reviews__list">
                    <div
                        v-for="review in reviews"
                        :key="review.id"
                        class="review"
                    >
                        <div class="review__description">
                            <p class="review__content">"{{ review.description }}"</p>
                        </div>
                        <div class="review__footer">
                            <p class="review__author">{{ review.author }}</p>
                            <p class="review__date">{{ review.visited_at }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="section__wrapper">
                <p class="section__title">Новый отзыв</p>
                <p class="section__description">Опишите все ваши впечатления от посещения ресторана. Заполните анкету и отправьте отзыв на модерацию с помощью кнопки.</p>
                <TheReviewForm />
            </div>
        </div>
    </section>
  </main>
</template>

<script>
import TheReviewForm from '@/components/TheReviewForm.vue'

export default {
    components: {
        TheReviewForm
    },
    data() {
        return {
            reviews: []
        }
    },
    async mounted() {
        const response = await fetch('/reviews.json');
        const data = await response.json();

        this.reviews = data;
    }
}
</script>

<style scoped>
    .page--reviews {
        background-image: url("@/assets/images/reviews.jpg");
    }

    .reviews {
        background-color: #f3f2f2;
    }

    .reviews__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
        gap: 50px;
    }

    .review {
        background-color: #fff;
        padding: 65px 50px 75px;
        width: 350px;
    }

    .review__description {
        border-bottom: 2px solid #ebebeb;
        margin-bottom: 35px;
        padding-bottom: 15px;
    }

    .review__content {
        font-size: 15px;
        color: #989898;
    }

    .review__author {
        margin-bottom: 5px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .review__date {
        font-size: 12px;
        color: #909090;
        text-transform: uppercase;
    }
</style>