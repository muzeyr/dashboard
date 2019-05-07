<template>
  <div>
    <md-table v-model="searched" md-sort="adi_soyadi" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Öğrenciler</h1>
          <md-button class="md-primary md-raised" @click="newUser">Yeni Öğrenci </md-button>

        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Ara..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
 

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="#" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Adı Soyadı" md-sort-by="name">{{ item.adi_soyadi }}</md-table-cell>
        <md-table-cell md-label="Okul" md-sort-by="name">{{ item.okul }}</md-table-cell>
        <md-table-cell md-label="Notlar" md-sort-by="name">{{ item.notlar }}</md-table-cell>
          <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary" @click="guncelle(item)">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top" >Güncelle</md-tooltip>
          </md-button>
         
        </md-table-cell>

      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { APIService } from "@/services/ApiService";

const apiService = new APIService();


  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.adi_soyadi).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'ogrenci-list',
    data: () => ({
      search: null,
      searched: [],
      ogrenciList: [],
      ogrenciList: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        }
      ]
    }),
   
    methods: {
      newUser () {
        window.alert('Noop')
      },
      guncelle(item){
        this.$router.push({name:'ogrencip', params:{id:item.id}});
      },
      searchOnTable () {
        this.searched = searchByName(this.ogrenciList, this.search)
      },
      newUser(){
                this.$router.push({name:'ogrencip', params:{id:0}});

      }
    },
    created () {
      
       console.log('>>');
      apiService.getOgrenciList().then((data) => {
        this.searched = data.results;
        this.ogrenciList = data.results;
        
      }); 
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>