import axios from "axios";
import { getAuthenticityToken } from "./getAuthenticityToken";

const ax = axios.create({
  headers: {
    common: {
      "X-CSRF-Token": getAuthenticityToken(),
    },
  },
});

export default ax;
