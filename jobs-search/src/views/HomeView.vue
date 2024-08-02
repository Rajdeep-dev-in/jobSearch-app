<template>
    <HeroSection :title="title" :subtitle="subtitle"/>
    <HomeCard />
    <JobsListing :showButton="true" :limit="3"/>
</template>
<script setup>
    import HeroSection from '@/components/HeroSection.vue'
    import HomeCard from '@/components/HomeCard.vue';
    import JobsListing from '@/components/JobsListing.vue'
    import {ref} from 'vue'

    const title = ref("Become A Potential Developer")
    const subtitle = ref('Find the best jobs that fit your skills and needs')
</script>