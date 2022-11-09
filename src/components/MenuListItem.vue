<template>
  <div
    @click="pickMenu"
    class="mouse-over m-4 d-flex justify-content-between"
    :class="{'bg-success': menu.selected}"
    >
      <div><img class="w-25" :src=menu.image :alt=menu.image></div>
      <div>{{ menu.title }}</div>
      <div>{{ menu.price }}</div>
    </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    pickMenu() {
      this.$store.dispatch("pickMenu", this.menu)
    }
  }
}
</script>

<style>
.selected {
  background-color: aqua;
}
</style>