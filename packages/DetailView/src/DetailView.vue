<script>
import Attribute from './Attribute'
import { Validator } from 'tg-validators'

export default {
    name: 'TagDetailView',
    data() {
        return {
            attributes: [],
            mode: 'view',
            errors: {},
        }
    },
    props: {
        form: Object,
        rules: {
            type: Array,
            default: () => [],
        },
        labels: {
            type: Object,
            default: () => ({}),
        },

        title: String,
        readonly: Boolean,
        type: String,
    },
    computed: {},
    created() { },
    render(h) {
        return <tag-panel class="detail-view" title={this.title} minable={false} type={this.type}>
            <template slot="tools">
                {
                    this.mode === 'view' ?
                        <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.toggleMode}>
                            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        </button>
                        :
                        [
                            <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.toggleMode}>
                                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>,
                            <button type="button" class="btn btn-link btn-xs" aria-label="Left Align" onClick={this.handleOk}>
                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                            </button>
                        ]
                }
            </template>
            <table class="table table-bordered">
                <colgroup>
                    <col width="20%" />
                    <col />
                </colgroup>
                <tbody>
                    {
                        this._l(this.attributes, (attribute) => {
                            return attribute.render(h, this.mode, this.form, this.labels, this.errors);
                        })
                    }
                </tbody>
            </table>
            {
                this.$slots.default
            }
        </tag-panel>
    },
    methods: {
        toggleMode() {
            if (this.mode === 'edit')
                this.mode = 'view'
            else
                this.mode = 'edit'
        },
        addAttribute(attribute, label, slots) {
            this.attributes.push(new Attribute({ attribute, label, slots }))
        },
        handleOk() {
            if (this.rules.length) {
                Validator.validate(this.form, this.rules, this.labels)
                    .then(() => {
                        this.$emit('submit')
                    })
                    .catch(err => this.errors = err);
            } else {
                this.$emit('submit')
            }
        },
    }
}
</script>
<style lang="scss">
.detail-view {
  .table {
    margin-bottom: 0;
  }
  .attribute-error {
    padding-top: 1em;
  }
}
</style>
