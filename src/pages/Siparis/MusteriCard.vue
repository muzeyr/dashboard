<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="musteri.img" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{musteri.id}} - {{musteri.musteri_adi}}</h6>
      <h4 class="card-title">{{musteri.telefon}}</h4>
      <p class="card-description">
      {{musteri.adres}}
      </p>
      <md-button class="md-round md-success">Bilgileri Düzenle</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "musteri-card",
  props: {
    musteri:[]
  },
  data() {
    return {};
  }
};
</script>
<style></style>
