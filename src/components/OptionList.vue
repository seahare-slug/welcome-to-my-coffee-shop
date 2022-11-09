<template>
  <div>
    <h1>3. 옵션을 고르세요.</h1>
    <ul class="option-list">
      <OptionListItem
        v-for="(option, index) in optionList"
        :key="index"
        :option="option"/>
    </ul>
  </div>
</template>

<script>
import OptionListItem from "@/components/OptionListItem"

export default {
  name: 'OptionList',
  components: {
    OptionListItem,
  },
  computed: {
    optionList () {
      return this.$store.state.optionList
    },
  },
}
</script>

<style>
</style>