<template>
  <div
    @click="pickSize"
    class="mouse-over m-4 d-flex justify-content-between"
    :class="{'bg-success': size.selected}"
    >
      <div>{{ size.name }}</div>
      <div>{{ size.price }}</div>
    </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    pickSize() {
      this.$store.dispatch("pickSize", this.size)
    }
  }
}
</script>

<style>
</style>