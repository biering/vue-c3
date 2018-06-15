# vue-c3

> vue-c3 is a reusable vue component for [c3](https://github.com/c3js/c3) charts

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

## Install

```bash
npm install --save vue-c3

# and if it's not already installed:
npm install --save c3
```

## Usage

In your vue-component:

```vue
<template>
  <div>
    <vue-c3 :handler="handler"></vue-c3>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'

  export default {
    name: ...,
    components: {
      VueC3
    },

    data () {
      return {
        handler: new Vue()
      }
    }
  }
</script>
```

You can use the handler to send events to the `vue-c3` component:

To initialize the c3 chart call:

```vue

<script>
  ...
  export default {
    name: ...,

    mounted () {
      // to init the graph call:
      const options = {
        data: {
          columns: [
            ['data1', 2, 4, 1, 5, 2, 1],
            ['data2', 7, 2, 4, 6, 10, 1]
          ],
          ...
        },
        ...
      }
      this.handler.$emit('init', options)
    }
  }
</script>
```

### Events

An overview of all events which can be submitted to the `.$emit(name, ..)` method:

|Name|Parameters|Description|
|:--:|:--:|:--|
|`init`|[options](http://c3js.org/reference.html)|Use this method before anything else to generate the chart|
|`destroy`|-|Used to destroy the chart|
|`dispatch`|[api](http://c3js.org/reference.html#api)|Access the c3 chart object directly to use the api|

For example you can use `this.handler.$emit('dispatch', (chart) => chart.resize())` to resize the chart.

For more information about c3 see the documentation [http://c3js.org/reference.html](http://c3js.org/reference.html).

## License

Copyright (c) 2017 - 2018 Christoph Biering, Licensed under the [MIT license](./LICENSE).
