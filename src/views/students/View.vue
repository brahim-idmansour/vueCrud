<script setup></script>

<template>
  <div class="">
    <div class="card">
      <div class="card-header">
        <h4>
          students
          <RouterLink to="students/create" class="btn btn-primary float-end"
            >add student</RouterLink
          >
        </h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>course</th>
              <th>email</th>
              <th>phone</th>
              <th>created at</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length > 0">
            <!-- foreach loop -->
            <tr v-for="(student, index) in this.students" :key="index">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.created_at }}</td>
              <td>
                <RouterLink to="#" class="btn btn-success">edit</RouterLink>
                <RouterLink to="#" class="btn btn-danger">delete</RouterLink>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">loading...</td>
            </tr>
          </tbody>
        </table>

        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    // console.log("ok");
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios.get("http://127.0.0.1:8000/api/students").then((res) => {
        this.students = res.data.students;
        // console.log(this.students);
      });
    },
  },
};
</script>
