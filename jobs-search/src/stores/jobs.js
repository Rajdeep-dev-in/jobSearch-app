import { defineStore } from "pinia";
import {ref} from 'vue';
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
// import jobsData from '../jobs.json'

export const useJobsStore = defineStore('jobs', () =>{
    const jobs = ref([]);
    const job = ref()
    let isLoading = ref(false)
    const router = useRouter();

    const toast = useToast()

    async function fetchAllJobs(){
        try{
            isLoading.value = true
            const res = await axios('http://localhost:3000/jobs')
            jobs.value = res.data
        }catch(err){
            console.log(err);
            isLoading.value = false
        }finally{
            isLoading.value = false
        }
    }

    async function fetchOneJob(payload){
        try{
            isLoading.value = true
            const res = await axios(`http://localhost:3000/jobs/${payload}`)
            job.value = res.data
            console.log(job.value);
            //return job
        }catch(err){
            console.log(err);
            isLoading.value = false
        }finally{
            isLoading.value = false
        }
    }

    async function addJob(payload){
        try{
            isLoading.value = true
            const res = await axios.post('http://localhost:3000/jobs', payload)
            console.log(res);
            toast.success('Jobs Added Successfully')
            router.push('/jobs')
        }catch(err){
            isLoading.value = false
            toast.error('Something went wrong!')
            console.log(err);
        }finally{
            isLoading.value = false
        }
    }

    async function editJob(payload, id){
        try {
            isLoading.value = true;
            const res = await axios.put(`http://localhost:3000/jobs/${id}`, payload)
            toast.success('Job Updated Successfully')
            router.push(`/jobs/${id}`)
        } catch (error) {
            isLoading.value = false
            toast.error(err.response.data)
            console.log(err.response.data);
        }finally{
            isLoading.value = false
        }
    }

    async function deleteJob(payload){
        try {
            console.log(payload, 'payload');
            
            isLoading.value = true
            await axios.delete(`http://localhost:3000/jobs/${payload}`)
            toast.success('Job deleted Successfully')
            router.push('/jobs')

        } catch (err) {
            isLoading.value = false
            toast.error(err.response.data)
            console.log(err.response.data);
            
        }finally{
            isLoading.value = false
        }
    }

    return{
        jobs,
        job,
        isLoading,
        fetchAllJobs,
        fetchOneJob,
        addJob,
        deleteJob,
        editJob

    }
})