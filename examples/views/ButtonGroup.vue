<template>
    <div>
        <h1>按钮组</h1>
        <hr>

        <section>

            <h2>基本实例</h2>
            <tag-button-group>
                <tag-button>Left</tag-button>
                <tag-button>Middle</tag-button>
                <tag-button>Right</tag-button>
            </tag-button-group>
        </section>
        <section>

            <h2>尺寸</h2>
            <div class="example">
                <tag-button-group size="lg">
                    <tag-button>Left</tag-button>
                    <tag-button>Middle</tag-button>
                    <tag-button>Right</tag-button>
                </tag-button-group>
                <tag-button-group size="md">
                    <tag-button>Left</tag-button>
                    <tag-button>Middle</tag-button>
                    <tag-button>Right</tag-button>
                </tag-button-group>
                <tag-button-group size="sm">
                    <tag-button>Left</tag-button>
                    <tag-button>Middle</tag-button>
                    <tag-button>Right</tag-button>
                </tag-button-group>
                <tag-button-group size="xs">
                    <tag-button>Left</tag-button>
                    <tag-button>Middle</tag-button>
                    <tag-button>Right</tag-button>
                </tag-button-group>
            </div>
        </section>
        <section>
            <h2>垂直排列</h2>
            <div class="example">
                <tag-button-group vertical>
                    <tag-button>Left</tag-button>
                    <tag-button>Middle</tag-button>
                    <tag-button>Right</tag-button>
                </tag-button-group>
            </div>
        </section>

    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
