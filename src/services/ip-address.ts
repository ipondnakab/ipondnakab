import axios from "axios";

export const getIpAddress = async () =>
  (await axios.get<{ ip: string }>("https://api.ipify.org/?format=json")).data
    .ip;
