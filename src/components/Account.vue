<template>
    <v-container><h1>Dear {{uid}}</h1>
        <v-btn fab dark small color="primary">
            <v-icon dark>add</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "account",
        computed:{
            uid(){
                return this.$store.getters.getUserID;
            }
        }
    }
</script>

<style scoped>

</style>