<template>
    <section class=" bg-blue-50 px-4 py-10">
        <div class=" container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center"> 
                Browse Jobs
            </h2>
            <div 
                v-if="jobsStore.isLoading"
                class="text-center text-gray-500 py-6"
            >
                <PulseLoader />
            </div>
            <div v-else class=" grid grid-cols-1 gap-6 md:grid-cols-3">
                <div v-for="job in jobsStore.jobs.slice(0, limit || jobsStore.jobs.length)" :key="job.id">
                    <JobCard  :job="job" />
                </div>
                
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink 
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>

</template>
<script setup>
    import { useJobsStore } from '@/stores/jobs';
    import { onMounted } from 'vue';
    import JobCard from './JobCard.vue';
    import { RouterLink } from 'vue-router';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

    const jobsStore = useJobsStore();
    onMounted(() =>{
        jobsStore.fetchAllJobs()
    })

    const props = defineProps({
        showButton:{
            type: Boolean,
            default: false
        },
        limit: {
            type: Number,
        }
    })
</script>