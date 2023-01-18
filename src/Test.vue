<template>
  <div id="test">
<!--    <Usercard />-->
<!--    <Homework />-->
<!--    <HomeworkSearch />-->
<!--    <HomeworkImg />-->
<!--    <ProductCard />-->
<!--    <ProductList />-->
<!--    <Lesson4 />-->
    <LessonForm />
<!--    <LessonModal />-->
<!--<mixin />-->
<!--    <Modal />-->
  </div>
</template>

<script>
import Test1 from "@/components/Test1";
import Login from "@/components/Login";
import Homework from "@/components/Homework";
import Usercard from "@/components/Usercard";
import HomeworkSearch from "@/components/HomeworkSearch";
import HomeworkImg from "@/components/HomeworkImg";
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import Lesson4 from "@/components/Lesson4";
import LessonForm from "@/components/LessonForm";
import LessonModal from "@/components/LessonModal";
import Modal from "@/components/Modal";


export default {
  name: "Test.vue",
  components: {
    Modal,
    LessonModal,
    LessonForm,
    Lesson4,
    ProductList,
    ProductCard,
    HomeworkImg,
    HomeworkSearch,
    Usercard,
    Homework,
    Test1,
    Login
  }
}
</script>

<style scoped>

</style>