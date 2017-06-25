<script>
import DetailView from './DetailView'
export default {
    name: 'TagDetailView',
    data() {
        return {
            DetailView: null,
        }
    },
    props: {
        options: {
            type: Object,
            default: {},
        },
    },
    computed: {
        model() { return this.options.model },
        attributes() { return this.DetailView.attributes },
        title() { return this.options.title },
    },
    created() {
        this.DetailView = new DetailView(this.options);
    },
    render(h) {
        return <tag-panel title={this.title} minable={false}>
            <template slot="tools">
                {
                    this.DetailView.mode === 'view' ?
                        <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.toggleMode}>
                            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        </button>
                        :
                        [
                            <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.toggleMode}>
                                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>,
                            <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.toggleMode}>
                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                            </button>
                        ]
                }
            </template>
            <table class="detail-view table table-bordered">
                <colgroup>
                    <col width="20%" />
                    <col />
                </colgroup>
                <tbody>
                    {
                        this._l(this.attributes, (attribute) => {
                            return attribute.render(h, this.DetailView.mode, this.model);
                        })
                    }
                </tbody>
            </table>
        </tag-panel>
    },
    methods: {
        toggleMode() {
            if (this.DetailView.mode === 'edit')
                this.DetailView.mode = 'view'
            else
                this.DetailView.mode = 'edit'
        }
    }
}
</script>
