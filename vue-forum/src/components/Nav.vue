<template>
    <el-row class="mainNav">

        <!-- icon -->
        <el-col class="icon" :span="6" :offset="3">
            <el-image :src="iconUrl" style="width:100px;height: 80px;"/>
        </el-col>

        <!-- nav -->
        <el-col class="mainNav1" :span="6">
            <el-menu mode="horizontal" :ellipsis="false" :default-active="activeIndex" router>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/user">用户</el-menu-item>
                <el-menu-item index="/new">新闻</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>
                <el-sub-menu index="/other1">
                    <template #title>待开发功能</template>
                    <el-menu-item index="/others1">待开发功能1</el-menu-item>                  
                    <el-menu-item index="/others2">待开发功能2</el-menu-item>                  
                    <el-sub-menu index="/others31">
                        <template #title>待开发功能3</template>
                        <el-menu-item index="/others31">待开发功能3-1</el-menu-item>
                        <el-menu-item index="/others32">待开发功能3-2</el-menu-item>
                    </el-sub-menu>                
                </el-sub-menu>
            </el-menu>
        </el-col>

        <!-- login -->
        <el-col class="login" :span="6">
            <el-button-group>
                <el-button>注册</el-button>
                <el-button>登录</el-button>
                <el-button>发布</el-button>
            </el-button-group>
        </el-col>

    </el-row>
    
</template>

<script setup>
import {defineProps,ref} from 'vue'
defineProps({
    iconUrl:String
})
const activeIndex = ref('/home')
</script>

<style lang="scss">
.mainNav {
    .icon {
        display: flex;
        justify-content: flex-end;
        align-content: center;
    }
    .mainNav1 {
        margin-left: 25px;
        margin-right: 25px;
        el-menu-item {
            border:0;
        }
    }
    .login {
        position: relative;
        top: 15px;
        left: 30px;
    }
}
</style>