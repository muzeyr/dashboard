import axios from 'axios';
const API_URL = 'http://nurhilal.com/mutlu.php?';
export class APIService{

constructor(){
}

getOgrenciList() {
    const url = `${API_URL}ISLEM=OGRENCI_LIST`;
    return axios.get(url).then(response => response.data);
}
getMusteri(id) {
    const url = `${API_URL}/musteri/?id=${id}`;
    return axios.get(url).then(response => response.data);
}
getOgrenci(id) {
    const url = `${API_URL}ISLEM=DETAY&id=${id}`;
    return axios.get(url).then(response => response.data);
}
getOgrenciKaydet(form){ 
    const url = `${API_URL}ISLEM=KAYDET`;
    return axios.post(url,form)
      .then(function (response) {
        response => response.data
      })
      .catch(function (error) {
        response => error
      });
  

}

}