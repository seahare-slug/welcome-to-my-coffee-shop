<template>
  <li>
    <div class="m-4 d-flex justify-content-end">
      <span class="m-4">{{ option.type }}</span>
      <button class="w-25" @click="decrease">➖</button>
      <span class="m-2">{{ option.count }}</span>
      <button class="w-25" @click="increase">➕</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.dispatch("updateOptionList", {
        option: this.option,
        whichMethod: "increaseMethod",
      })
    },
    decrease() {
      this.$store.dispatch("updateOptionList", {
        option: this.option,
        whichMethod: "decreaseMethod",
      })
    },
  },
}
</script>

<style>
</style>