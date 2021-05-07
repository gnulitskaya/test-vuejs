<template>
  <div class="card">
    <div>Страница пользователя {{ $route.params.id }}</div> 
    <router-link :to="'/'"> <div class="btn mr-5">Вернуться на главную</div> </router-link>
  </div>
</template>

