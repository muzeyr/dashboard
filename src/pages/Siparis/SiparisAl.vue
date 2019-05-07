<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Sipariş Ver</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-80">
            <md-field>
              <label>Döner</label>
              <md-select v-model="selectedProduct" name="movies" id="movies" multiple>
                <md-option v-for="item in urunList" :key="item.id" :value="item">{{item.urunAdi}}</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-80">
            <md-field>
              <label>İçeçek</label>
              <md-select v-model="selectedFruit" name="movies" id="movies" multiple>
                <md-option v-for="item in icecekList" :key="item.id" :value="item">{{item.urunAdi}}</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field maxlength="100">
              <label>Özel Açıklama</label>
              <md-textarea v-model="ozel"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="orderSubmit()">Sipariş Ver</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Son Siparişler</h4>
        <p class="category">Son 24 Saat içinde verilen siparişler</p>
      </md-card-header>
      <md-card-content>
        <md-table v-model="historyOrder">
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Name">{{
              item.musteri_adi }}</md-table-cell>
            <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
            <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
            <md-table-cell md-label="Salary">{{ item.salary }}</md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "siparis-al",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },

  methods: {
    orderSubmit() {
      // alert('Açıklama'+this.ozel+' - '+this.selectedProduct+' - '+this.selectedFruit);
    },
    addOrder() {
      console.log(">>>>" + this.selectedProduct);
      // this.orderList.add(this.product);
    }
  },
  data() {
    return {
      selectedProduct: [],
      selectedFruit: [],
      orderList: [],
      urunList: [
        { id: "1", urunAdi: "Et Döner" },
        { id: "2", urunAdi: "Et Dürüm Döner" },
        { id: "3", urunAdi: "Tavuk Döner" },
        { id: "4", urunAdi: "Tavuk Dürüm Döner" }
      ],

      historyOrder: [
        {
          musteri_adi: "Muhammed ÖZCAN",
          salary: "$36,738",
          country: "Niger",
          city: "Oud-Turnhout"
        },
        {
          musteri_adi: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao",
          city: "Sinaai-Waas"
        },
        {
          musteri_adi: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Overland Park"
        },
        {
          musteri_adi: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Gloucester"
        },
        {
          musteri_adi: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten"
        },
        {
          musteri_adi: "Mason Porter",
          salary: "$78,615",
          country: "Chile",
          city: "Gloucester"
        }
      ],
      adinizSoyadiniz: null,
      cepTelefon: null,
      ozel: "Sipariş ile ilgili özel açıklamarı girin adres,ketçap ,mayonez."
    };
  }
};
</script>
<style lang="scss" scoped>
.md-field {
  max-width: 700px !important;
}
</style>
