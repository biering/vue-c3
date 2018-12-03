(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('c3')) :
  typeof define === 'function' && define.amd ? define(['c3'], factory) :
  (global.howLongUntilLunch = factory(global.c3));
}(this, (function (c3) { 'use strict';

  c3 = c3 && c3.hasOwnProperty('default') ? c3['default'] : c3;

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

      data: function () {
        return {
          $chart: null
        }
      },

      methods: {
        destroyChart: function () {
          if (this.$chart) {
            this.$chart = this.$chart.destroy();
          }
        },

        initChart: function (options) {
          if (this.$chart) {
            this.destroyChart();
          }
          if (!options) {
            options = {};
          }
          options.bindto = this.$el;
          this.$chart = c3.generate(options);
        },

        dispatchChart: function (cb) {
          if (cb && this.$chart) {
            cb.call(null, this.$chart);
          }
        }
      },

      mounted: function () {
        if (this.handler) {
          this.handler.$on(INIT, this.initChart);
          this.handler.$on(DESTROY, this.destroyChart);
          this.handler.$on(DISPATCH, this.dispatchChart);
        }
      },

      beforeDestroy: function () {
        this.destroyChart();
      }
    };

  return VueC3;

})));
