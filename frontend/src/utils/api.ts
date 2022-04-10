import ParamsRequest from "./types/ParamsRequest";
import axios from "axios";
export async function postParams(request: ParamsRequest) {
  const response = await axios
    .post("/api/post", request)
    .catch((error) => error.response);
  return response;
}
