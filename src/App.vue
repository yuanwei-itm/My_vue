<script setup>
import { ref } from 'vue'

const masonryCards = ref([
  { id: 1, height: 'h-72', title: 'Card 1' }, 
  { id: 2, height: 'h-50', title: 'Card 2' }, 
  { id: 3, height: 'h-80', title: 'Card 3' },
  { id: 4, height: 'h-80', title: 'Card 4' },
  { id: 5, height: 'h-72', title: 'Card 5' },
  { id: 6, height: 'h-52', title: 'Card 6' },
  { id: 7, height: 'h-62', title: 'Card 7' },
  { id: 8, height: 'h-72', title: 'Card 8' },
  { id: 9, height: 'h-72', title: 'Card 9' },
])
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
    <div class="w-full max-w-[1400px] h-[90vh] flex shadow-2xl rounded-[30px] overflow-hidden bg-white">
      
      <div class="w-[160px] bg-[#0088ff] text-white flex flex-col justify-center items-center shrink-0">
        <h1 class="text-xl font-bold tracking-widest opacity-90">MENU</h1>
      </div>

      <!-- 右侧内容区域 -->
      <div class="flex-1 flex flex-col bg-white">
        
        <header class="h-16 bg-[#e68a8a] flex justify-end items-center px-8 shrink-0">
          <div class="w-10 h-10 rounded-full border-2 border-white/50 bg-gray-300 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </header>

        <!-- 主体内容区域 -->
        <div class="flex-1 overflow-y-auto p-8">
          
          <!-- 站点信息卡片 -->
          <div class="grid grid-cols-4 gap-4">
            <div class="h-40 bg-[#7d00e6] rounded-3xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20 hover:-translate-y-1 transition-transform cursor-pointer">
              站点信息
            </div>
            <div class="h-28 bg-[#00e6c3] rounded-3xl shadow-lg shadow-teal-500/20 hover:-translate-y-1 transition-transform"></div>
            <div class="h-28 bg-[#00e6c3] rounded-3xl shadow-lg shadow-teal-500/20 hover:-translate-y-1 transition-transform"></div>
            <div class="h-28 bg-[#00e6c3] rounded-3xl shadow-lg shadow-teal-500/20 hover:-translate-y-1 transition-transform"></div>
          </div>

          <div class="flex gap-4 mt-8 pb-8">
            <!-- 左侧红色固定高度区域 -->
            <div class="w-[340px] shrink-0 h-[592px] bg-[#e61919] rounded-3xl shadow-lg shadow-red-500/20"></div>

            <!-- 瀑布流布局区域 -->
            <div class="flex-1 columns-3 gap-4 space-y-4">
              <div 
                v-for="card in masonryCards" 
                :key="card.id"
                :class="[card.height, 'bg-gray-300 rounded-2xl w-full break-inside-avoid shadow-sm hover:shadow-md transition-shadow']"
              >
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>