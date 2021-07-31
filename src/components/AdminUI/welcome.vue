<template>
  <div class="card mx-auto d-flex shadow-lg w-25">
    <div class="card-body">
      <h5 class="card-title text-center">
        Course registration and exams record
      </h5>

      <p class="card-text text-center mb-5 font-bold">Welcome {{ name }}</p>

      <div>
        <b-calendar
          v-model="value"
          selected-variant="success"
          today-variant="info"
          nav-button-variant="primary"
          :min="min"
          :max="max"
          locale="en"
        ></b-calendar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      name: localStorage.getItem('username'),
      value: '',
      min: minDate,
      max: maxDate
    }
  }
}
</script>
