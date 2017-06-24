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
    },
    created() {
        // console.log(this.options);
        this.DetailView = new DetailView(this.options);
    },
    render(h) {
        return <tag-panel title="xx">
            <table class="detail-view table table-bordered">
                <colgroup>
                    <col width="20%" />
                    <col />
                </colgroup>
                <tbody>
                    {
                        this._l(this.attributes, (attribute) => {
                            return this.DetailView.renderAttribute(h, attribute);
                        })
                    }
                </tbody>
            </table>
        </tag-panel>
    },
}
</script>
