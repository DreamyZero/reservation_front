<template>
  <v-app>
    <v-main>
      <TheHeader />
      <router-view/>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader, TheFooter
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  font-family: "Open Sans", sans-serif;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.page {
  margin-top: -100px;
  background-repeat: no-repeat;
  background-size: cover;
}

.page__wrapper {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page__content {
  text-align: center;
  color: #fff;
}

.page__title {
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
}

.page__description {
  font-size: 20px;
  max-width: 700px;
  width: max-content;
  margin: 0 auto;
}

.page__button {
  width: max-content;
  margin: 30px auto;
}

.section {
  padding: 90px 0 40px;
}

.section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section__title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
}

.section__description {
  text-align: center;
  font-weight: 300;
  font-size: 17px;
  color: #555;
  max-width: 700px;
  margin-bottom: 30px;
}

.form--booking {
  width: 66%;
  margin: 0 auto;
}

.form__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
}

.form__column {
  width: 50%;
}

.form__field {
  width: 100%;
}

.form__input {
  width: 100%;
  background-color: #fff;
  border-radius: 0;
  padding: 18px 22px;
  border: 2px solid #f0f0f2;
  outline: 0;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
}

.form__input::-moz-placeholder {
  color: #909090;
}

.form__input:-ms-input-placeholder {
  color: #909090;
}

.form__input::placeholder {
  color: #909090;
}

.form__input--textarea {
  font-size: 16px;
}

.form__button {
  margin: 0 auto;
}

.form__label {
  font-size: 15px;
  color: #989898;
  margin-bottom: 5px;
  display: inline-block;
}

.form__input--textarea {
  resize: none;
}
</style>
