<template>
    <router-link
        v-if="!disabled"
        :to="link" class="button"
        :class="subclass"
    >
        <slot></slot>
    </router-link>
    <span
        v-else
        class="button"
        :class="subclass"
    >
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        link: String,
        subclass: String,
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
    .button {
        background-color: #f1f1f1;
        color: #333;
        display: block;
        border: none;
        cursor: pointer;
        font-weight: 600;
        padding: 15px 35px 20px;
        transition: background-color 0.5s ease, color 0.5s ease;
    }

    a.button:hover {
        background-color: #333;
        color: #f1f1f1;
    }

    .button--dark {
        background-color: #333;
        color: #f1f1f1;
    }

    .button--dark:hover {
        background-color: #f1f1f1;
        color: #333;
    }

    span.button {
        opacity: 0.5;
        cursor: default;
    }
</style>