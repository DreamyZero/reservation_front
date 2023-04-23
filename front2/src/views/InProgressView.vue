<template>
  <main>
    <section class="page page--empty">
      <div class="page__wrapper">
          <div class="page__content">
              <h1 class="page__title">Страница в разработке</h1>
              <p class="page__description">Скоро тут будет что-то очень крутое!</p>
              <TheButton link="/" subclass="page__button">На главную</TheButton>
          </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheButton from '@/components/TheButton.vue'

export default {
    components: {
        TheButton
    }
}
</script>

<style scoped>
    .page--empty {
        background-image: url("@/assets/images/contacts.jpg");
        height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>