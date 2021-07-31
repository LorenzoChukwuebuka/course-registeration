<template>
  <div class="col-sm-6 col-md-6 text-center">
    <div class="card mx-5  shadow-lg" style="width:120%;">
      <div class="card-body">
        <h5 class="card-title">Courses</h5>
        <b-list-group>
          <b-list-group-item v-for="cos in course" :key="cos.cid">
            <strong>Course Code</strong>: &nbsp; {{ cos.course_code }} &nbsp;
            &nbsp; <strong> Course Title : &nbsp; </strong>
            {{ cos.course_title }} &nbsp; <b> level </b>: {{ cos.levels }}
            <p>
              <span @click="deleteCourse(cos.cid)">
                <b-button class="bg-danger">
                  <b-icon icon="trash-fill" aria-hidden="true"> </b-icon>
                </b-button>
              </span>
              &nbsp;

              <span @click="startEdit(cos, cos.cid)">
                <b-button class="bg-primary" v-b-modal.modal-1>
                  <b-icon icon="pencil-fill"> </b-icon>
                </b-button>
              </span>
            </p>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>

    <!------- edit modal --->

    <div>
      <b-modal id="modal-1" title="Edit courses ">
        <div v-if="success.length">
          <p v-for="suc in success">
            <b-alert show variant="success"> {{ suc }} </b-alert>
          </p>
        </div>

        <div class="card">
          <div class="card-header">
            Courses
          </div>
          <div class="card-body">
            <b-form>
              <label for="input-none"> Course Code</label>
              <b-form-input class="mb-3" v-model="edit.courseCode">
              </b-form-input>
              <label for="input-none"> Course title</label>
              <b-form-input class="mb-3" v-model="edit.CourseTitle">
              </b-form-input>
              <div class="mb-3">
                <label for="input-none"> level</label>
                <b-form-select class="mt-3" v-model="edit.level">
                  <option value="__"> Select level </option>
                  <option
                    class="px-3 "
                    v-for="level in levels"
                    :key="level.Id"
                    :value="level.Id"
                  >
                    {{ level.levels }}
                  </option>
                </b-form-select>

                <label for="input-none" class="mx-1"> unit </label>
                <b-form-select class="mt-3 mx-1" v-model="edit.courseLoad">
                  <option value="__"> Select unit </option>
                  <option
                    class="px-3 "
                    v-for="cu in load"
                    :key="cu.Id"
                    :value="cu.Id"
                  >
                    {{ cu.course_load }}
                  </option>
                </b-form-select>
              </div>

              <b-form-input class="mb-3" v-model="edit.Id" hidden>
              </b-form-input>

              <b-button class="mt-3 bg-primary" @click="update">
                update
              </b-button>
            </b-form>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'showCourse',
  props: ['course', 'levels', 'load'],
  data () {
    return {
      edited: null,
      edit: {
        courseCode: '',
        CourseTitle: '',
        level: '',
        courseLoad: '',
        Id: ''
      },
      success: []
    }
  },
  methods: {
    deleteCourse (cid) {
      this.$emit('Id', cid)
    },
    startEdit (cos) {
      this.edited = cos
      this.edit.courseCode = this.edited.course_code
      this.edit.CourseTitle = this.edited.course_title
      this.edit.level = this.edited.levelId
      this.edit.courseLoad = this.edited.course_load
      this.edit.Id = this.edited.cid
    },
    update (e) {
      e.preventDefault()

      let Id = this.edit.Id
      axios
        .put(`http://localhost:3000/api/course/course/${Id}`, this.edit)
        .then(res => {
          if (res.data === 200) {
            this.success.push('Course has been updated successfully')
            setTimeout(() => {
              location.reload()
            }, 1000)
          }
        })
    }
  }
}
</script>

<style></style>
