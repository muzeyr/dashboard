<template>
 <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Öğrenci Tanımlama ve düzenleme</h4>
        
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
           
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Adı Soyadı</label>
              <md-input v-model="form.id" type="hidden"></md-input>
              <md-input v-model="form.adi_soyadi" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Okulu</label>
              <md-input v-model="form.okul" type="text"></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Öğrenci Notları</label>
              <md-textarea v-model="form.notlar"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="save()">Kaydet</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

import { APIService } from "@/services/ApiService";

const apiService = new APIService();


export default {
 
  name: "ogranci-karne",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },

  },
  data() {
    return {
        form:{
          id:0,
          adi_soyadi:null,
          okul:null,
          notlar:null
        },
        message:null,
        type: ["", "info", "success", "warning", "danger"],
        notifications: {
          topCenter: false
        }
        
    };
  },
  methods: {
    
    save() { 
       apiService.getOgrenciKaydet(this.form).then((data) => {
        // this.message = data.message
         this.notifyVue('top', 'right','İşlem Başarılı')
         this.$router.push({name:'ogrenci'});
        
      }); 
    },
     notifyVue(verticalAlign, horizontalAlign,message) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
         message,
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: 'success'
      });
    }
  },
   created: function() {
     console.log('aaaaaaa')
     if(this.$route.params.id!=0)
      apiService.getOgrenci(this.$route.params.id).then((data) => {
          this.form = data.results[0]

      }); 
  }
};
</script>
<style lang="scss" scoped>
.md-field {
  max-width: 700px !important;
}
</style>
