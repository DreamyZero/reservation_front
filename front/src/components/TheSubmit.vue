<template>
    <button type="submit" class="form__button button" :class="subclass">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        subclass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .button:hover {
        background-color: #333;
        color: #f1f1f1;
    }
</style>