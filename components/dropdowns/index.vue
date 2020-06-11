
<template>
  <div class="relative">
    <div class="flex items-center justify-between">
      <button v-on-clickaway="away" :class="computeBtnStyles" class="focus:outline-none px-3 py-2 text-white" @click="click">
        <FontIcon slot="rightIcon" icon="bars" class="w-10 h-6 text-2xl" />
      </button>
    </div>
    <div class=" bg-white min-w-dropdown z-50 rounded-b rounded-tl absolute mt-1 right-0 z-50" :class="computeMenuStyles">
      <Button icon="eye" class="links links-rounded-none" btnText="Accound details" :clickHandler="() => $router.push('/accounts')" />
      <Button icon="plus-square" class="links links-rounded-none" btnText="Add account" :clickHandler="() => $router.push('/accounts/create')" />
      <Button icon="power-off" class="signout rounded-tl-none rounded-tr-none w-full" btnText="Sign out" :clickHandler="() => logout()" />
    </div>
  </div>
</template>
<script>

import { directive as onClickaway } from 'vue-clickaway'
import FontIcon from '~/components/icons'
import Button from '~/components/forms/buttons'

export default {
  name: 'Dropdown',
  directives: {
    onClickaway
  },
  components: {
    FontIcon,
    Button
  },
  data: () => ({
    showMenu: false
  }),
  computed: {
    computeMenuStyles: self => (self.showMenu ? 'inline-block' : 'hidden'),
    computeBtnStyles: self => (self.showMenu ? 'bg-white rounded text-international-orange rounded-bl-none rounded-br-none' : '')
  },
  mounted () {
    this.$nextTick(() => document.addEventListener('keydown', this.handleEscape))
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.handleEscape)
  },
  methods: {
    click () {
      this.showMenu = !this.showMenu
    },
    away () {
      this.showMenu = false
    },
    handleEscape (event) {
      if (event.key === 'Esc' || event.key === 'Escape') {
        this.showMenu = false
      }
    },
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
<style lang="scss" scoped>
  .links {
    @apply w-full text-left py-2 font-normal text-base bg-white text-ebony;
    &:hover {
      @apply text-white bg-international-orange
    }
  }
  .signout {
    @apply text-monza bg-cherub text-left py-2 font-normal text-base
  }
  .signout:hover {
    @apply text-white bg-monza
  }
  .links-rounded-none {
    @apply rounded-none
  }
</style>
