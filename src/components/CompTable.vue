<template>
  <div class="wrapper-filter">
    <el-table
      ref="singleTable"
      :data="listProduct"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" label="STT" width="50"> </el-table-column>
      <el-table-column property="date" label="Tiêu đề" width="350" prop="title">
      </el-table-column>
      <el-table-column property="name" label="Loại" prop="categoryName">
      </el-table-column>
      <el-table-column property="address" label="Hãng" prop="companyName">
      </el-table-column>
      <el-table-column property="address" label="Giá" prop="price">
      </el-table-column>
      <el-table-column property="address" label="Số lượng" prop="quantity">
      </el-table-column>
      <el-table-column property="address" label="Hành động" width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    listProduct: { type: Array, default: null },
  },
  // computed: {
  //   getListProduct() {
  //     return
  //   }
  // },
};
</script>

<style>
.el-table {
  margin-top: 12px;
}
</style>
