<template>
  <div>
    <h3>element ui text</h3>
    <h4>type</h4>
    <el-text class="mx-1">Default</el-text>
    <br>
    <el-text class="mx-1" type="primary">Primary</el-text>
    <br>
    <el-text class="mx-1" type="success">Success</el-text>
    <br>
    <el-text class="mx-1" type="info">Info</el-text>
    <br>
    <el-text class="mx-1" type="warning">Warning</el-text>
    <br>
    <el-text class="mx-1" type="danger">Danger</el-text>

    <h4>size</h4>
    <el-text class="mx-1" size="large">Large</el-text>
    <br>
    <el-text class="mx-1">Default</el-text>
    <br>
    <el-text class="mx-1" size="small">Small</el-text>

    <h4>使用tag属性覆盖元素</h4>
    <el-space direction="vertical">
      <el-text>span</el-text>
      <el-text tag="p">This is a paragraph.</el-text>
      <el-text tag="b">Bold</el-text>
      <el-text tag="i">Italic</el-text>
      <el-text> This is <el-text tag="sub" size="small">subscript</el-text>
      </el-text>
      <el-text> This is <el-text tag="sup" size="small">superscript</el-text>
      </el-text>
      <el-text tag="ins">Inserted</el-text>
      <el-text tag="del">Deleted</el-text>
      <el-text tag="mark">Marked</el-text>
    </el-space>

    <h3>element ui button</h3>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>

  </div>
</template>

<script setup >

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

</script>
