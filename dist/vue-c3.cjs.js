'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var c3 = _interopDefault(require('c3'));

const INIT     = 'init';
const DESTROY  = 'destroy';
const DISPATCH = 'dispatch';

var VueC3 = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuec3-chart"})},
staticRenderFns: [],
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
        this.$chart = this.$chart.destroy();
      }
    },

    mounted () {

      if (this.handler) {

        this.handler.$on(INIT, (options = {}) => {
          if (this.$chart) {
            this.destroyChart();
          }

          options.bindto = this.$el;
          this.$chart = c3.generate(options);
        });


        this.handler.$on(DESTROY, () => {
          this.destroyChart();
        });


        this.handler.$on(DISPATCH, (cb) => {
          if (cb && this.$chart) {
            cb.call(null, this.$chart);
          }
        });

      }

    },

    beforeDestroy () {
      this.destroyChart();
    }
  };

module.exports = VueC3;
