<template>
 <p id="loading">Loading...</p>
  <div class="container" aria-labelledby="loading" role="progressbar">
    <div class="circle" id="circle-1"></div>
    <div class="circle" id="circle-2"></div>
    <div class="circle" id="circle-3"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  margin: 0 auto;
  width: 50%;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px auto;
  animation: grow 3s linear infinite;
}

#circle-1 {
  background-color: #f781f7;
}
#circle-2 {
  background-color: rgb(155, 100, 179);
}
#circle-3 {
  background-color: #f781f7;
}

@keyframes grow {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script setup></script>
