<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area" /> 
            
    </div>
    <div class="actions">
        <base-btn mode="outline" link :to="coachContactLink">Contact</base-btn> 
        <base-btn link :to="coachDetailsLink">View Details</base-btn>
    </div>
  </li>
</template>

<script>
import BaseBtn from '../ui/BaseBtn.vue';
export default {
  components: { BaseBtn },
    props: ['id','firstName', 'lastName', 'rate', 'areas'],
    computed: {
      fullName(){
        return this.firstName + ' ' + this.lastName;
      }
    ,
    coachContactLink(){
        return this.$route.path + '/' + this.id + '/contact' 
    },
    coachDetailsLink(){
        return this.$route.path + '/' + this.id; 
    }
  }}

</script>

<style scoped>
a:active,
a:hover,
a.router-link-active {
  color: red;
}
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>