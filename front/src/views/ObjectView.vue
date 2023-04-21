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
                            <p class="review__date">{{ review.reservation_history.visited_at }}</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
    </section>
  </main>
</template>
