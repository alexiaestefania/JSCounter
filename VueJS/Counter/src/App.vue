<template>
  <div class="countbox">
        <h4>The current count is:</h4>
        <br>
        <h1 id="counter">
          {{ count }}
        </h1>
        <div class="buttons"> 
            <button id="minus"
            v-on:click="count--">-</button>
            <button id="add"
            v-on:click="count++">+</button>
        </div>
    </div>
</template>

<style scoped>



.countbox {
    width: 40%;
    margin: 150px auto;
    padding: 25px;
    border-radius: 10px;
    border: #3f57c2 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
}

.countbox h1 {
    color: #3f57c2;
    font-size: 64px;
}

.buttons {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

}

button {
    cursor: pointer;
    border: #3f57c2 1px solid;
    margin: 0 25px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #3f57c2;
}

</style>

<script setup>
import {ref} from "vue";

const count = ref(0);
</script>