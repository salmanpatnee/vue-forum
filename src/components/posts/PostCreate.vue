<script setup>
import { ref } from 'vue';

const emits = defineEmits(['save'])

const text = ref('');

const handleSubmit = () => {
    
    const id = Math.random();

    const post = {
        id: id,
        publishedAt: Math.floor(Date.now() / 100), 
        text: text.value, 
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
    };
    
    emits('save', {post});
  
  text.value = "";

}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3">
            <textarea 
                v-model="text" 
                class="form-control" 
                id="text" 
                placeholder="Write post">
            </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
    </form>
</template>