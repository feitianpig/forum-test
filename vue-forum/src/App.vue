<script setup>
import iconImage from '@i/icon.jpg'
import Nav from '@c/Nav.vue'
</script>

<template>
    <Nav :iconUrl="iconImage"></Nav>
    <router-view></router-view>
</template>