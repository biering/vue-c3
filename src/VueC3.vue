<template>
  <div class="vuec3-chart"></div>
</template>

<script>
  import c3 from 'c3'
  import * as events from './events'

  export default {
    name: 'vuec3',

    // TODO: support for options prop
    props: {
      handler: {
        required: true,
        type: Object
      }
    },

    data () {
      return {
        $chart: null
      }
    },

    methods: {
      destroyChart () {
        this.$chart = this.$chart.destroy()
      }
    },

    mounted () {

      if (this.handler) {

        this.handler.$on(events.INIT, (options = {}) => {
          if (this.$chart) {
            this.destroyChart()
          }

          options.bindto = this.$el
          this.$chart = c3.generate(options)
        })


        this.handler.$on(events.DESTROY, () => {
          this.destroyChart()
        })


        this.handler.$on(events.DISPATCH, (cb) => {
          if (cb && this.$chart) {
            cb.call(null, this.$chart)
          }
        })

      }

    },

    beforeDestroy () {
      this.destroyChart()
    }
  }
</script>
