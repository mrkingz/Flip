<template>
  <div>
    Dashboard
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  layout: 'auth-layout',
  middleware: 'auth',
  head () {
    return {
      title: 'Dashboard',
      meta: [
        { hid: 'description', name: 'description', content: 'Airtimeflip ashboard page' }
      ]
    }
  }
}
</script>
