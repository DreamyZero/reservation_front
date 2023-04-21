<template>
  <main>
    <section class="hero">
        <div class="hero__wrapper">
            <div class="hero__content">
                <p class="hero__subtitle">Незабываеые впечатления</p>
                <h1 class="hero__title">Reserved</h1>
                <p class="hero__description">Уютное место для ваших завтраков, обедов и ужинов.</p>
                <TheButton subclass="hero__button" link="/booking">Забронировать столик</TheButton>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheButton from '@/components/TheButton.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader, TheButton
  }
}
</script>

<style scoped>
  .hero {
    margin-top: -100px;
    background-image: url("@/assets/images/home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero__wrapper {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero__content {
    text-align: center;
    max-width: 500px;
    color: #fff;
  }

  .hero__subtitle {
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 300;
  }

  .hero__title {
    font-size: 65px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 13px;
  }

  .hero__description {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 20px;
  }
</style>
