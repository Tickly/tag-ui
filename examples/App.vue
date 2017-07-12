<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-3">
        <ul>
          <li v-for="(component,key) in examples" :key="key">
            <a :href="'/'+key">{{key}}</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import examples from './index'
export default {
  name: 'app',
  data() {
    return {
      examples,
    }
  }
}
</script>
