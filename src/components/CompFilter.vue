<template>
  <div class="wrapper-filter">
    <el-input
      type="text"
      placeholder="Nhập tên sản phẩm"
      v-model="searchInput"
      @input="onInputChange"
    ></el-input>
    <el-select
      v-model="value1"
      multiple
      placeholder="Loại sản phẩm"
      @change="changeFilter(...$event)"
    >
      <el-option key="0" label="empty" value="null"> </el-option>
      <el-option
        v-for="category in categoryList"
        :key="category.id"
        :label="category.categoryName"
        :value="category.id"
      >
      </el-option>
    </el-select>
    <el-button style="margin-left: 20px" type="danger">Xóa bộ lọc</el-button>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    changeFilter(idCategpory) {
      const newFilter = {
        ...this.filter,
        category_id: idCategpory,
        _page: 1,
      };
      this.$emit("onChangeFilter", newFilter);
    },
    // onInputChange(val) {
    //   //  const newFilter = {
    //   //   ...this.filter,
    //   //   category_id: idCategpory,
    //   //   _page: 1,
    //   // };
    //   // this.$emit("onChangeFilter", newFilter);
    // },
  },
  props: {
    categoryList: { type: Array, default: null },
    filter: { type: Object, default: null },
  },
};
</script>

<style>
.wrapper-filter {
  display: flex;
}

.el-input {
  max-width: 300px;
  margin-right: 20px;
}
</style>
