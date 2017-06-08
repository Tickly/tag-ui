<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-3">
        <ul>
          <li>
            <a href="/panel">panel</a>
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
export default {
  name: 'app'
}
</script>
