<template>
    <div>
        <tag-button></tag-button>
    
        <h3>预定义样式</h3>
        <div>
            <tag-button></tag-button>
            <tag-button type="primary"></tag-button>
            <tag-button type="success"></tag-button>
            <tag-button type="info"></tag-button>
            <tag-button type="warning"></tag-button>
            <tag-button type="danger"></tag-button>
            <tag-button type="link"></tag-button>
        </div>

        <h3>尺寸</h3>
        <div>
            <tag-button size="lg"></tag-button>
            <tag-button></tag-button>
            <tag-button size="sm"></tag-button>
            <tag-button size="xs"></tag-button>
        </div>
    
        <h3>激活状态</h3>
        <div>
            <tag-button active></tag-button>
        </div>

        <h3>禁用状态</h3>
        <div>
            <tag-button disabled></tag-button>
        </div>
    </div>
</template>
