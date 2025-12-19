<script setup>
// 逻辑部分暂时留空
</script>

<template>
  <div class="h-screen w-full bg-gray-100 p-4 overflow-hidden flex items-start overflow-x-auto">
    
    <div class="flex w-full h-full min-w-[1440px] max-w-[1920px] bg-white rounded-[45px] shadow-2xl overflow-hidden relative mx-auto">

      <aside class="w-[185px] h-full bg-[#0d8df6] flex-shrink-0 flex flex-col items-center justify-center">
        <span class="text-white font-bold opacity-50">MENU</span>
      </aside>

      <div class="flex-1 flex flex-col h-full min-w-0">
        
        <header class="h-[77px] bg-[#e27d7d] w-full flex-shrink-0 flex items-center justify-end px-10">
          <div 
            class="w-[61px] h-[57px] rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer hover:opacity-90 transition"
            style="background-image: url('https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/77258563278/95f5/c8e0/4185/394641e478e87751eab4d0f54ea6aab8.png')"
          ></div>
        </header>

        <main class="flex-1 bg-white p-8 overflow-y-auto flex flex-col gap-10">
          
          <div class="flex gap-8 items-start">
            <div class="w-[386px] h-[176px] bg-[#7409df] rounded-[45px] flex-shrink-0 shadow-lg flex items-center justify-center">
               <span class="text-white text-lg font-bold">站点信息</span>
            </div>
            
            <div class="flex-1 h-[176px] flex items-center rounded-xl overflow-hidden">
               <img 
                 src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/77258563836/388d/95fb/1e4a/c00784320e50f9962f6e216db5bf0b8b.png" 
                 class="h-full object-contain ml-10" 
                 alt="Banner"
               />
            </div>
          </div>

          <div class="flex gap-8 items-start h-full">
            
            <div class="w-[460px] h-[601px] rounded-[45px] bg-gradient-to-t from-[#e91a1a] to-[#fd0909] flex-shrink-0 shadow-lg text-white flex items-center justify-center text-2xl font-bold">
              设备详细信息
            </div>

            <div class="flex-1 flex gap-6 h-[601px] overflow-hidden">
              
              <div class="flex flex-col gap-8 w-1/3">
                <div class="h-[145px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[145px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[214px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
              </div>

              <div class="flex flex-col gap-8 w-1/3 pt-8">
                <div class="h-[151px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[151px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[144px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
              </div>

              <div class="flex flex-col gap-8 w-1/3">
                <div class="h-[138px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[218px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
                <div class="h-[104px] bg-[#d8d8d8] rounded-2xl w-full hover:bg-gray-300 transition"></div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>