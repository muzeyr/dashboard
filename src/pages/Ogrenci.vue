<template>
  <div class="content">
    <div class="md-layout" >
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <ogrenci-list  data-background-color="green"></ogrenci-list>
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
     
    };
  },
  created: function() {
        
  }
};
</script>
