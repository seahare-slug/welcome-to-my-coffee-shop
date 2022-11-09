<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <div class="border">
      <MenuListItem
        v-for="(menu, index) in menuList"
        :key="index"
        :menu="menu"
      />
    </div>
  </div>
</template>

<script>
import MenuListItem from "@/components/MenuListItem"

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList () {
      return this.$store.state.menuList
    },
  },
  methods: {
  },
}
</script>

<style>

</style>