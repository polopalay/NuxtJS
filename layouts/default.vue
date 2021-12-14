<template>
    <div>
        <default-header />
        <nuxt />
    </div>
</template>

<script>
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
// import DefaultHeader from '../components/Header/DefaultHeader.vue'

export default {
    components: {
        DefaultHeader
    }
}
</script>