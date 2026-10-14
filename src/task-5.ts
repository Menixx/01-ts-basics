type Status = "loading" | "success" | "error";

function logStatus(status: Status): Status {
  return status;
}

console.log(logStatus("error"));
