<template>
  <div class="content">
    
 
    <div class="md-layout"  >
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <ogrenci-karne data-background-color="green"></ogrenci-karne>
      </div>
    </div>
    
  </div>
</template>

<script>
import { OgrenciList, OgrenciKarne } from "@/pages";
import { APIService } from "@/services/ApiService";

const apiService = new APIService();
export default {
  components: {
    OgrenciList,
    OgrenciKarne
  },
  data() {
    return {
      form:{
        
      }
      
    };
  },
  created: function() {
         apiService.getOgrenci(this.form).then((data) => {
        // this.message = data.message
          
        
      }); 
  }
  
};
</script>
