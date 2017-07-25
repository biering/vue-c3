# vue-c3

> vue-c3 is a reusable vue component for c3 charts

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

---

PACKAGE IN WORK
