<template>
    <section>
        <h3>labels</h3>
        <div>
            <tag-table :data="data" :columns="columns" :labels="labels" />
        </div>
    </section>
</template>
<script>
import data from './data'
export default {
    data() {
        return {
            columns: [
                'name',
            ],
            data,
            labels: {
                name: '姓名',
            },
        }
    }
}
</script>
