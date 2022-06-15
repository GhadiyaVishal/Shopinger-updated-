import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTZiZGFmNjVlZGMyNzgzNTliODVhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTE5MDM4MiwiZXhwIjoxNjU1NDQ5NTgyfQ.ytE8uAamHFYIc2q_hXQ2vAJ1BbDaAD27zoUqqBW79vU";

export const publicRequest = axios.create({
  baseUrl: BASE_URL,
});

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
