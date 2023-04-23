<template>
  <v-footer border class="bg-shades-black">
    <v-row justify="right">
      <v-col class="text-center mt-4" cols="12">
        <strong>Reservation</strong> {{new Date().getFullYear()}}
      </v-col>
    </v-row>

  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
    ],
  }),
}
</script>

