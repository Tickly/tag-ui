<template>
  <div>
    <section>
      <h1>不同类型</h1>
      <tag-panel title="default" type="default"></tag-panel>
      <tag-panel title="primary" type="primary"></tag-panel>
      <tag-panel title="success" type="success"></tag-panel>
      <tag-panel title="info" type="info"></tag-panel>
      <tag-panel title="warning" type="warning"></tag-panel>
      <tag-panel title="danger" type="danger"></tag-panel>
    </section>

    <tag-panel title="标题" type="info">
      这里是默认的slot
      <div slot="footer">这里是具名slot[footer]</div>
      <template slot="tools">
        <button type="button" class="btn btn-link btn-xs" aria-label="Left Align">
          <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
      </template>
    </tag-panel>
  </div>
</template>
