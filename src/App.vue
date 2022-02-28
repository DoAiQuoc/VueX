<template>
  <div id="app">
    <el-container>
      <el-header>
        <comp-header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <comp-dashboard />
        </el-aside>
        <el-container>
          <el-main>
            <comp-filter
              :categoryList="getCategoryList"
              :filter="filter"
              @onChangeFilter="handleFilterChange"
            />
            <comp-table v-bind:listProduct="listProduct" />
            <el-pagination
              background
              layout="prev, pager, next"
              :page-count="getPagination._totalPage"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompHeader from "@/components/CompHeader.vue";
import CompTable from "@/components/CompTable.vue";
import CompDashboard from "@/components/CompDashboard.vue";
import CompFilter from "@/components/CompFilter.vue";
import { GET_LIST_PRODUCT } from "@/constants/constants";
import { GET_LIST_CATEGORY } from "@/constants/constants";
import { GET_LIST_COMPANY } from "@/constants/constants";

export default {
  name: "App",
  data() {
    return {
      listProduct: [],
      pagination: {},
      filter: {
        _page: 1,
        _size: 5,
      },
    };
  },
  computed: {
    ...mapGetters("products", ["getListProduct", "getPagination", "getFilter"]),
    ...mapGetters("categories", ["getCategoryMap", "getCategoryList"]),
    ...mapGetters("companies", ["getCompanyMap", "getCompanyList"]),
    check() {
      this.getCompanyMap;
      this.getCategoryMap;
      this.getListProduct;
      return Date.now();
    },
  },
  mounted() {
    this.$store.dispatch(`products/${GET_LIST_PRODUCT}`, {
      filter: this.getFilter,
    });
    this.$store.dispatch(`categories/${GET_LIST_CATEGORY}`);
    this.$store.dispatch(`companies/${GET_LIST_COMPANY}`);
  },
  methods: {
    handleFilterChange(newFilter) {
      this.$store.dispatch(`products/${GET_LIST_PRODUCT}`, {
        filter: newFilter,
      });
      this.filter = newFilter;
    },
    handleCurrentChange(val) {
      const newFilter = {
        ...this.filter,
        _page: val,
      };
      this.$store.dispatch(`products/${GET_LIST_PRODUCT}`, {
        filter: newFilter,
      });
    },
  },
  components: {
    CompHeader,
    CompDashboard,
    CompTable,
    CompFilter,
  },
  watch: {
    check() {
      this.listProduct = this.getListProduct.map((product) => ({
        ...product,
        price: product.price.toLocaleString("it-IT") + "đ",
        categoryName:
          this.getCategoryMap[Number.parseInt(product.categoryId)]
            ?.categoryName,
        companyName:
          this.getCompanyMap[Number.parseInt(product.companyId)]?.companyName,
      }));
    },
    getFilter() {
      this.filter = this.getFilter;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}

.el-pagination {
  margin-top: 12px;
}
</style>
