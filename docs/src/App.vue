<template>
  <main class="main">
    <header-view></header-view>

    <h1>VueUp</h1>

    <div class="links">
      <a href="https://www.npmjs.com/package/vueup">
        npm
      </a>
      <span class="divider">|</span>
      <a href="https://github.com/chryb/vueup">
        github
      </a>
    </div>

    <div class="chart">
      <vue-c3 :handler="handler"></vue-c3>
    </div>


    <button @click="addData">Load Data</button>

    <p>
      Simple, lightweight and super fast global notification popup for Vue.js.
    </p>

    <p>
      With VueUp you can easily notify your users about certain actions and effects.
    </p>

    <p>
      For more information see <a href="https://github.com/chryb/vueup">VueUp on Github</a>.
    </p>

    <footer>
      Released under the <a href="//github.com/chryb/vueup/blob/master/LICENSE">MIT</a> license.
      <a href="//github.com/chryb/vueup">View source.</a>
    </footer>
  </main>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'plugin'

  import HeaderView from './Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderView,
      VueC3
    },

    data () {
      return {
        handler: new Vue()
      }
    },

    mounted () {
      const options = {
        data: {
          columns: [
            ['data1', 2, 4, 1, 5, 2, 1, 3, 1, 3, 5, 3, 2, 7, 8, 9, 7, 3, 1],
            ['data2', 7, 2, 4, 6, 10, 1, 4, 7, 8, 12, 14, 8, 5, 2, 5, 2, 2, 1]
          ]
        }
      }

      this.handler.$emit('init', options)
    },

    methods: {
      addData () {
        this.handler.$emit('dispatch', (chart) => {
          let data1 = chart.data('data1')[0].values.map(v => v.value)
          let data2 = chart.data('data2')[0].values.map(v => v.value)

          data1.unshift(Math.floor(Math.random() * 15))
          // data1 = data1.shift()
          data2.unshift(Math.floor(Math.random() * 15))
          // data2 = data2.shift()

          chart.load({
            columns: [
              ['data1', ...data1],
              ['data2', ...data2]
            ]
          })
        })
      }
    }
  }
</script>

<style>
  @import './c3.min.css';
</style>

<style lang="scss">
  @import './style.scss';
  @import './highlight.scss';
</style>
