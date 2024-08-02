<template>
    <nav class=" bg-green-700 border-b-green-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class=" flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <RouterLink
                        class="flex flex-shrink-0 items-center mr-4"
                        to="/"
                    >
                    <img class=" h-10  w-auto rounded-full" :src="logo" alt="OfficialLogo" />
                    <span
                        class="hidden md:block text-white text-2xl font-bold ml-2"
                    >
                        Jobs Finder
                    </span>
                </RouterLink>
                <div
                    class="md:ml-auto"
                >
                    <div class="flex space-x-2">
                        <RouterLink
                            to="/"
                            :class="[
                                activeRouterLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white px-3 py-2 rounded-md'
                            ]
                            
                            "
                        >
                            Home
                        </RouterLink>
                        <RouterLink
                            to="/jobs"
                            :class="[
                                activeRouterLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white px-3 py-2 rounded-md'
                            ]
                            
                            "
                        >
                            Jobs
                        </RouterLink>
                        <RouterLink
                            to="/add-jobs"
                            :class="[
                                activeRouterLink('/add-jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                                'text-white px-3 py-2 rounded-md'
                            ]
                            
                            "
                        >
                            Add Job
                        </RouterLink>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import logo from '@/assets/img/glassdoor.png';

    const router = useRoute()

    function activeRouterLink(payload){
        return router.path === payload
    }
</script>