<template>
    <main>
        <section class="page page--booking">
            <div class="page__wrapper">
                <div class="page__content">
                    <h1 class="page__title">Столик #{{ table.id }}</h1>
                    <p class="page__description">Успейте забронировать столик в нашем ресторане на необходимую вам дату и время.</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section__wrapper">
                    <div class="tables">
                        <div class="table">
                            <div class="table__header {% if table.is_reserved %} table__header--dark {% endif %}">
                                <p class="table__status">
                                    <span v-if="table.is_reserved">
                                        Занят
                                    </span>
                                    <span v-else>
                                        Свободен
                                    </span>
                                </p>
                            </div>
                            <div class="table__content">
                                <span class="table__number">#{{ table.id }}</span>
                            </div>
                            <div class="table__description">
                                <p
                                    v-for="(category, i) in table.categories"
                                    :key="i"
                                    class="table__category"
                                >{{ category }}</p>
                                <TheButton :link="'/reservations/' + table.id" subclass="table__button">Посмотреть</TheButton>
                                <TheButton :disabled="table.is_reserved" link="#" subclass="table__button">Забронировать</TheButton>
                            </div>
                        </div>
                    </div>
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
    },
    data() {
        return {
            table: {}
        }
    },
    async mounted() {
        const response = await fetch('/main.json');
        const data = await response.json();
        const id = this.$route.params.id;
        this.table = data.find(el => el.id == id);
    }
}
</script>

<style scoped>
    .tables {
        display: flex;
        justify-content: center;
    }
</style>