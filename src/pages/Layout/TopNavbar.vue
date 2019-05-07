<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete v-model="selectedEmployee" :md-options="employees">
                 <label>Ara...</label>
                <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                
                  <md-highlight-text :md-term="term">{{ item.adi_soyadi }}</md-highlight-text>
                </template>

               

                 
              </md-autocomplete> 
          </div>
          <md-list>
            <md-list-item href="#/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <md-list-item href="#/notifications" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                  <span class="notification">1</span>
                  <p class="hidden-lg hidden-md">Bildirimler</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">Test Bildirim</a></li>
                
                </ul>
              </drop-down>
            </md-list-item>

            <md-list-item href="#/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { APIService } from "@/services/ApiService";

const apiService = new APIService();



export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [ 
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  },
   created () {
    console.log('>>');
      apiService.getOgrenciList().then((data) => {
        this.employees = data.results; 
        
      }); 
    }
};
</script>

<style lang="css"></style>
