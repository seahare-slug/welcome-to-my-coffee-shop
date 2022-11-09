<template>
  <li>
    <div class="d-flex border">
      <div><img class="w-25" :src=this.order[4] alt=""></div>
      <div>
        <div>MENU: {{ this.order[0] }}</div>
        <div>SIZE: {{ this.order[1] }}</div>
        <div>PRICE: {{ totalPrice }}</div>
      </div>
      <div>
        <div class="mx-4">샷 추가: {{ optionList[0].count }} price: {{ optionList[0].price }}</div>
        <div class="mx-4">시럽 추가: {{ optionList[1].count }} price: {{ optionList[1].price }}</div>
        <div class="mx-4">컵 홀더 추가: {{ optionList[2].count }} price: {{ optionList[2].price }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Array,
  },
  computed: {
    totalPrice () {
      return this.order[2] + this.order[3]
    },
    optionList () {
      return this.$store.state.optionList
    }
  },
}
</script>

<style>
</style>