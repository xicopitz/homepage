import { existsSync } from "fs";

import { cpu, drive, mem } from "node-os-utils";
import systeminformation from "systeminformation"

export default async function handler(req, res) {
  const { type, target } = req.query;

  if (type === "cpu") {
    return res.status(200).json({
      cpu: {
        usage: await cpu.usage(1000),
        load: cpu.loadavgTime(5),
        temp: await systeminformation.cpuTemperature()?.main
      },
    });
  }

  if (type === "gpu") {
    return res.status(200).json(
      {
        gpu: {
          temp: await systeminformation.graphics().controllers?.filter((cont) => cont?.bus === "PCI")[0]?.temperatureGpu,
          usage: await systeminformation.graphics().controllers?.filter((cont) => cont?.bus === "PCI")[0]?.utilizationGpu,
          vendor: await systeminformation.graphics().controllers?.filter((cont) => cont?.bus === "PCI")[0]?.vendor,
        },
      });
  }

  if (type === "disk") {
    if (!existsSync(target)) {
      return res.status(404).json({
        error: "Target not found",
      });
    }

    return res.status(200).json({
      drive: await drive.info(target || "/"),
    });
  }

  if (type === "memory") {
    return res.status(200).json({
      memory: await mem.info(),
    });
  }

  return res.status(400).json({
    error: "invalid type",
  });
}
