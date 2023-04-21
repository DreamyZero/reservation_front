<template>
  <header class="header">
        <div class="header__wrapper">
            <nav class="header__nav">
                <ul class="header__menu">
                    <li class="header__item">
                        <router-link to="/" class="header__link">Главная</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/booking" class="header__link">Бронирование</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/reviews" class="header__link">Отзывы</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/in-progress" class="header__link">Контакты</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/in-progress" class="header__link">Галерея</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/reservations" class="header__link">Персонал</router-link>
                    </li>
                    <li class="header__item">
                        <a href="/main.json" target="_blank" class="header__link">JSON</a>
                    </li>
                    <li class="header__item">
                        <a href="/github" target="_blank" class="header__link">GitHub</a>
                    </li>
                    <li class="header__item">
                        <span class="header__text">Пользователь: {{ user.name }}</span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Иван',
                email: 'ivan@gmail.com'
            }
        }
    }
}
</script>

<style>
    .header {
        color: #fff;
    }
    
    .header--dark {
        color: #000;
    }

    .header__menu {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header__link {
        line-height: 100px;
        padding: 0 20px;
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        transition: color 0.5s ease;
    }

    .header__link:hover {
        color: #d5d5d5;
    }

    .header__text {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        color: #de8d8d;
    }
</style>