import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/botigaGadgets",name:"homeBotiga", component:()=>import('@/views/gadgets/HomeBotiga.vue')},
    {path:"/",name:"home", component:()=>import('@/views/food/Home.vue')},
    {path:"/receptes",name:"receptas", component:()=>import('@/views/food/Receptes.vue'), children:[{path:"/receptes/:id",name:"recepteDetalle", component:()=>import('@/views/food/recepteDetalle.vue')}]},
    
  ],
})

export default router
