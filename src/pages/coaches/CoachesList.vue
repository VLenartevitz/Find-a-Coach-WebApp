<template>
<section>
  <coach-filter @change-filter="setFilters"></coach-filter>
</section>
<section>
  <base-card>
  <div class="controls">

    <base-btn mode="outline">REFRESH</base-btn>
    <base-btn link to="/register">
     REGISTER as COACH
    </base-btn>
  </div>
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in filteredCoaches" :key="coach.id"
      :id="coach.id"
      :first-name="coach.firstName"
      :last-name="coach.lastName"
      :rate="coach.hourlyRate"
      :areas="coach.areas"></coach-item>
    </ul>
    <h3 v-else> No Coaches found </h3>
</base-card>
</section>
</template>
  
  <script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import BaseBtn from '../../components/ui/BaseBtn.vue'
import CoachFilter from '../../components/coaches/CoachFilter.vue'

  export default {
    components:{
      CoachItem,
        BaseBtn,
        CoachFilter,
    },
      data(){
        return{
          activeFilters:{
            frontend: true,
                backend: true,
                career: true
          },
        }
      },
      computed:{
        filteredCoaches(){
          const coaches = this.$store.getters['coaches/coaches'];
          return coaches.filter(coach => {
            if (this.activeFilters.frontend && coach.areas.includes('frontend')){
              return true
            }
            if (this.activeFilters.backend && coach.areas.includes('backend')){
              return true
            }
            if (this.activeFilters.career && coach.areas.includes('career')){
              return true
            }
            return false
          })
        },
        hasCoaches(){
          return this.$store.getters['coaches/hasCoaches']
        }
      },
      methods:{
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters; 
        }
      }
      
  }
  </script>
  
  <style  scoped>
  a:active,
a:hover,
a.router-link-active {
  color:red;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.refre{
  display: flex;
  height: 25px;
  width: 90px;
}

.regi{
  display: flex;
}
  </style>