<template>
  <div class="vuec3-chart"></div>
</template>

<script>
  import c3 from 'c3'
  import * as events from './events'

  export default {
    name: 'vuec3',

    // TODO: support for options prop
    props: ['handler'],

    mounted () {


      if (this.handler) {
        this.handler.$on(events.INIT, (options) => {
          // destroy existing?

          options.bindto = this.$el
          this.$chart = c3.generate(options)
        })

        this.handler.$on(events.LOAD, (data) => {
          if (this.$chart) {
            this.$chart.load(data)
          }
        })

        this.handler.$on(events.UNSELECT, () => {
          if (this.$chart) {
            this.$chart.unselect()
          }
        })

        this.handler.$on(events.SELECT, (ids, indices, resetOthers) => {
          if (this.$chart) {
            this.$chart.select(ids, indices, resetOthers)
          }
        })
      }

    }
  }
</script>

<style lang="css">
</style>
