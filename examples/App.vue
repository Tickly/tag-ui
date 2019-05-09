<template>
  <div id="app">
    <nav class="app-header navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Tag-ui</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">
                <span>组件</span>
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>

        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <div class="app-body">
      <div class="sidebar">
        <ul class="list-group">
          <li v-for="(component,key) in examples" :key="key" class="list-group-item">
            <a :href="'/'+key">{{key}}</a>
          </li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import examples from './views'
export default {
  name: 'app',
  data () {
    return {
      examples,
    }
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.app-body {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
}
.sidebar {
  width: 240px;
  overflow: scroll;
}
.main {
  flex-grow: 1;
  padding: 15px;
  overflow: scroll;
}

.navbar {
  margin-bottom: 0;
}
</style>
