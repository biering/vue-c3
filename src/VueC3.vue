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

    data: function () {
      return {
        $chart: null
      }
    },

    methods: {
      destroyChart: function () {
        if (this.$chart) {
          this.$chart = this.$chart.destroy()
        }
      }
    },

    mounted: function () {
      if (this.handler) {

        this.handler.$on(events.INIT, function(options) {
          this.destroyChart()

          if (!options) {
            options = {};
          }
          options.bindto = this.$el
          this.$chart = c3.generate(options)
        })


        this.handler.$on(events.DESTROY, function() {
          this.destroyChart()
        })


        this.handler.$on(events.DISPATCH, function(cb) {
          if (cb && this.$chart) {
            cb.call(null, this.$chart)
          }
        })

      }
    },

    beforeDestroy: function () {
      this.destroyChart()
    }
  }
</script>
