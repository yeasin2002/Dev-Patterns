<script setup lang="ts">
const route = useRoute()
console.log(route.path)
</script>

<template>
    <div>
        <h1>Category :  {{ route.params.category }}</h1>
    </div>
</template>