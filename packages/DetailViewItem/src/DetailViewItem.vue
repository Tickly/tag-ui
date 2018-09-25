<script>
export default {
    name: 'TagDetailViewItem',
    props: {
        attr: {
            type: String,
            required: true,
        },
        label: String,
    },
    computed: {
        DetailView() {
            return this.$parent.$parent;
        }
    },
    created() {
        this.DetailView.addAttribute(this.attr, this.label, this.$slots);
    },
    render(h) { }
}
</script>
