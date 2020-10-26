<template>
  <div>
    <NavMenu style="position: absolute;top: 0px;left: 0px;"></NavMenu>
    <router-view/>
  </div>
</template>

<script>
    import NavMenu from "@/components/common/NavMenu";
    export default {
        name: "home",
        components: {NavMenu}
    }
</script>

<style scoped>

</style>
