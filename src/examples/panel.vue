<template>
    <tag-panel title="标题" type="info">
        123
        <div slot="footer">footer</div>
        <template slot="tools">
            <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" @click="toggleCollapse">
                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </button>
        </template>
    </tag-panel>
</template>
