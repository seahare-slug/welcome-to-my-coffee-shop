<template>
  <div id="app">
    <h1 class="mt-5 text-center">Coffee Order App</h1>
    <div class="m-5 p-5 bg-light d-flex justify-content-evenly">
      <MenuList/>
      <SizeList/>
      <OptionList/>
    </div>
    <button @click="addOrder" class="w-100 btn btn-success">장바구니 담기</button>
    <hr/>
    <OrderList/>
  </div>

</template>

<script>
import MenuList from "@/components/MenuList"
import SizeList from "@/components/SizeList"
import OrderList from "@/components/OrderList"
import OptionList from "@/components/OptionList"

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
  },
  methods: {
    addOrder () {
      this.$store.dispatch("addOrder")
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

.mouse-over {
        cursor: pointer;
      }
</style>
