<script>
import Thrivaling from '@/assets/images/thrivaling.png'
import ThvButton from '@/components/Shared/Button'
import moment from 'moment'

export default {
  name: 'Success',
  components: {
    ThvButton
  },
  data () {
    let user = JSON.parse(JSON.stringify(this.$store.getters['survey/user']))
    // Tidying user data so it displays in a nicer format.
    user.goals = user.goals.join(', ')
    user.DOB = moment(user.dob).format('DD/MM/YYYY')
    delete user.dob
    return {
      user
    }
  },
  computed: {
    thrivalingSrc () {
      return Thrivaling
    }
  },
  methods: {
    restart () {
      this.$store.commit('survey/resetState')
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
      <div class="success-container align-center">
        <img :src="thrivalingSrc" alt="happy thrivaling with a heart" />
        <h1>All done!</h1>

        <p class="body--large">
          Thank you for completing the survey. The following results have been
          submitted:
        </p>
      </div>
      <div class="submission-details">
        <div v-for="(item, key) in user" :key="item.name">
          <p class="label">{{ key }}</p>
          <p class="item" >{{ item }}</p>
        </div>

        <div class="align-center">
          <thv-button element="button" size="large" @click="restart"
            >Start over</thv-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css'>
.success-container {
  margin-top: 20px;
  margin-bottom: 40px;
}

.success-container img {
  height: 150px;
  margin-bottom: 20px;
}

.submission-details {
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px 0 #3d42502d;
  border-radius: 1rem;
}

.submission-details .label {
  text-transform: capitalize;
  margin-bottom: 0;
  color: #99A2BF;
  font-size: 14px;
  line-height: 21px;
}

.submission-details .item {
  margin-bottom: 20px;
  color: #3D4250;
  font-size: 1rem;
  line-height: 24px;
}
</style>
