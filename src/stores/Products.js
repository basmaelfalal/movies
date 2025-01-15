import { defineStore } from "pinia";
import axios from "axios";

export const ProductsModule = defineStore("ProductsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    beauty: [],
    categoryproducts:[],
    categories: [
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Tops",
        route: "tops",
      },
      {
        title: "Vehicle",
        route: "vehicle",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Smartphones",
        route: "smartphones",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "beauty"
          );

          this.flashDeals = res.data.products.slice(0, 8);
          this.beauty = res.data.products.filter(
            (el) => el.category === "beauty"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) =>this.categoryproducts = res.data );
    },
  },
});
