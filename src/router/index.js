import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/botigaGadgets",name:"homeBotiga", component:()=>import('@/components/gadgets/HomeBotiga.vue')},
    {path:"/",name:"home", component:()=>import('@/components/food/Home.vue')},
    {path:"/receptes",name:"receptas", component:()=>import('@/components/food/Receptes.vue'), children:[{path:"/receptes/:id",name:"recepteDetalle", component:()=>import('@/components/food/recepteDetalle.vue')}]},
    
  ],
})

export default router
