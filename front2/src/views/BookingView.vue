<template>
    <main>
        <section class="page page--booking">
            <div class="page__wrapper">
                <div class="page__content">
                    <h1 class="page__title">Бронирование</h1>
                    <p class="page__description">Успейте забронировать столик в нашем ресторане на необходимую вам дату и время.</p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section__wrapper">
                    <p class="section__title">Столики в нашем ресторане</p>
                    <p class="section__description">Ознакомтесь со списком столиков, их описанием и статусом. Забронируйте свободный столик нажатием на клавишу.</p>
                    <div class="tables">
                            <div 
                                v-for="table in tables"
                                :key="table.id"
                                class="table"
                            >
                                <div class="table__header">
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
                                    <TheButton :link="'/booking/' + table.id" subclass="table__button">Посмотреть</TheButton>
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
            tables: []
        }
    },
    async mounted() {
        const response = await fetch('/main.json');
        const data = await response.json();

        this.tables = data;
    }
}
</script>

<style> 
    .page--booking {
        background-image: url("@/assets/images/booking.jpg");
    }

    .tables {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
        width: 100%;
    }

    .table {
       width: calc(25% - 15px);
    }

    .table__header {
        background-color: #ebebeb;
        padding: 25px 0;
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
    }

    .table__header--dark {
        color: #fff;
        background-color: #333;
    }

    .table__content {
        padding: 25px 0;
        border: 2px solid #ebebeb;
        text-align: center;
    }

    .table__number {
        font-size: 48px;
    }

    .table__description {
        padding: 25px 0;
        border: 2px solid #ebebeb;
    }

    .table__category {
        margin: 10px 0;
        text-align: center;
        color: #989898;
    }

    .table__button {
        margin: 20px auto 10px;
        max-width: -webkit-max-content;
        max-width: -moz-max-content;
        max-width: max-content;
    }
</style>