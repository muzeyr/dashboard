<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <siparis-al data-background-color="green"> </siparis-al>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <musteri-card :musteri="musteri"> </musteri-card>
      </div>
    </div>
  </div>
</template>

<script>
import { MusteriCard, SiparisAl } from "@/pages"; 
import {APIService} from '@/services/ApiService';

const apiService = new APIService();
export default {
  components: {
    MusteriCard,
    SiparisAl
  },
  data() {
    return {
      musteriID:1,
      musteriList:[],
      musteri:{}

    }
  },
   created: function () {
      apiService.getMusteri(this.musteriID).then((data) => {
        console.log('>>>');
        this.musteri =data;
    });
  }
};
</script>
