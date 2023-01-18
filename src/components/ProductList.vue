<template>
  <div class="product-list">
    <div class="flex top-information">
      <h1> Tables </h1>
<!--    <input type="text" class="search" :value="searchText" @input="$event.target.value">-->
<!--    karch dzev v-model-->
<!--    <input type="text" class="search" v-model="searchText">-->
<!--    <my-input  v-model="searchText"/>-->
      <!--      {{ searchText }}-->
      <!-- search anel -->
      <search @search="searchProducts" ></search>
<!--      <button class="button">-->
<!--        Search-->
<!--      </button>-->
    </div>
      <ul class="list-default flex">
        <li
          v-for="(product, index) in products"
          :key="index"
        >
          <product-card
              :title="product.title"
              :price="product.price"
              :img-url="product.imgUrl"
              :count="product.count"
              @addToBasket="addToBasket(index)"
          />
        </li>
      </ul>
    </div>

</template>

<script>
import ProductCard from "@/components/ProductCard";
// import MyInput from "@/components/MyInput";
import Search from "@/components/Search";

export default {
  name: "ProductList",
  // MyInput
  components: {Search, ProductCard },
  data(){
    return{
      searchText: '',
      products: [
        {
          title: 'Table Jim',
          price: 179,
          imgUrl: 'https://cdn-images.article.com/products/SKU45/2890x1500/image42452.jpg',
          count: 30
        },
        {
          title: 'Table Monako',
          price: 199,
          imgUrl: 'https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg',
          count: 20
        },
        {
          title: 'Table with 2 boxes MD 768',
          price: 109,
          imgUrl: 'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23
        }
      ]

    }
  },
  methods: {
    addToBasket(index) {
      console.log(index)
    },
    searchProducts(searchText){
      console.log('Loading products:' + searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  width: 150px;
}
.product-list{
  display: flex;
  flex-direction: column;
}
.list-default{
  display: flex;
}
li {
  margin-right: 20px;
  list-style-type: none;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}

</style>