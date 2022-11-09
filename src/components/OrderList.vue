<template>
  <div>
    <div class="fs-4 text-center">
      <div>전체 주문 수: {{ totalOrderCount }}</div>
      <div>전체 가격: {{ totalOrderPrice }}</div>
    </div>
    <ul>
      <OrderListItem
        class="m-4"
        v-for="(item, index) in cart"
        :key="index"
        :order=item />
    </ul>
  </div>
</template>

<script>
import OrderListItem from "@/components/OrderListItem"

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalOrderCount () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice () {
      return this.$store.getters.totalOrderPrice
    }
  }
}
</script>

<style>
</style>