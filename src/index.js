import path from "path";
import os from "os-utils";
import consola from "consola";
import express from "express";

// Initialize the App
const app = express();
const PORT = 7000;

// SET MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

// SYSTEM OS DATA
app.get("/system-data", async (req, res) => res.status(200).json(evaluate()));

// INDEX FILE
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () =>
  consola.success({ badge: true, message: `Server started on port ${PORT}` })
);

const sendMail = () => {};

const evaluate = () => {
  os.cpuFree((v) => {
    this.freeCPU = v;
  });

  os.cpuUsage((v) => {
    this.cpuUsage = v;
  });
  return {
    cups: os.cpuCount(),
    freeCPU: this.freeCPU,
    cpuUsage: this.cpuUsage,
    freeMemKb: os.freemem(),
    loadAvg: os.loadavg(60),
    platform: os.platform(),
    totalMemKb: os.totalmem(),
    sysUptime: os.sysUptime(),
    freeMemPercent: os.freememPercentage(),
  };
};
