# vue-c3

> vue-c3 is a reusable vue component for [c3](https://github.com/c3js/c3) charts

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

## Install

```bash
npm install --save vue-c3
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

To initialize the graph call:

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
        }
      }
      this.handler.$emit('INIT', options)
    }
  }
</script>
```

##### Load

Loads data to the chart. For more information see [c3#load](http://c3js.org/reference.html#api-load).

```
this.handler.$emit('LOAD', data)
```

##### Unload

Unloads data from the chart. For more information see [c3#unload](http://c3js.org/reference.html#api-unload).

```
this.handler.$emit('UNLOAD', data)
```

##### Unselect

Deselect all selected points

```
this.handler.$emit('UNSELECT')
```

##### Add Region

```
this.handler.$emit('ADD_REGION', region)
```

##### Clear Regions

Clears all regions from the chart.

```
this.handler.$emit('CLEAR_REGIONS')
```

##### Resize

Triggers a resize event on the chart.

```
this.handler.$emit('RESIZE')
```

For the documentation about `c3.generate` see [http://c3js.org/reference.html](http://c3js.org/reference.html).

## License

Copyright (c) 2017 Christoph Biering, Licensed under the [MIT license](./LICENSE).

---

PACKAGE IN WORK
