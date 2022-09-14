import useSWR from "swr";
import { SiNvidia, SiAmd } from "react-icons/si";
import { BiError } from "react-icons/bi";
import { useTranslation } from "react-i18next";

import UsageBar from "./usage-bar";

export default function Gpu({ expanded }) {
  const { t } = useTranslation();

  const { data, error } = useSWR(`/api/widgets/resources?type=gpu`, {
    refreshInterval: 1500,
  });

  if (error || data?.error ) {
    return (
      <div className="flex-none flex flex-row items-center mr-3 py-1.5">
        <BiError className="text-theme-800 dark:text-theme-200 w-5 h-5" />
        <div className="flex flex-col ml-3 text-left">
          <span className="text-theme-800 dark:text-theme-200 text-xs">{t("widget.api_error")}</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex-none flex flex-row items-center mr-3 py-1.5">
        <BiError className="text-theme-800 dark:text-theme-200 w-5 h-5" />
        <div className="flex flex-col ml-3 text-left">
          <span className="text-theme-800 dark:text-theme-200 text-xs">-</span>
        </div>
      </div>
    );
  }

  if (data?.gpu?.vendor === undefined|| data?.gpu?.temp === undefined|| data?.gpu?.usage === undefined) {
    return (
      <div className="flex-none flex flex-row items-center mr-3 py-1.5">
        <BiError className="text-theme-800 dark:text-theme-200 w-5 h-5" />
        <div className="flex flex-col ml-3 text-left">
          <span className="text-theme-800 dark:text-theme-200 text-xs">{t("widget.unsupported_device")}</span>
        </div>
      </div>
    );
  }

  const percent = data.gpu.usage;
  return (
    <div className="flex-none flex flex-row items-center mr-3 py-1.5">
    {data.vendor = "nvidia" ? <SiNvidia className="text-theme-800 dark:text-theme-200 w-5 h-5" /> : <SiAmd className="text-theme-800 dark:text-theme-200 w-5 h-5" /> }
      <div className="flex flex-col ml-3 text-left min-w-[85px]">
        <div className="text-theme-800 dark:text-theme-200 text-xs flex flex-row justify-between">
          <div className="pl-0.5">
            {t("common.number", {
              value: data.gpu.usage,
              style: "unit",
              unit: "percent",
              maximumFractionDigits: 0,
            })}
          </div>
          <div className="pr-1">{t("docker.gpu")}</div>
        </div>
        {data.cpu.temp != undefined ?
        <div className="text-theme-800 dark:text-theme-200 text-xs flex flex-row justify-between">
          <div className="pl-0.5">
            {t("common.number", {
              value: data.gpu.temp,
              maximumFractionDigits: 0,
            })}ºC
          </div>
        </div>:
        <React.Fragment/>}
        {expanded && (
          <div className="text-theme-800 dark:text-theme-200 text-xs flex flex-row justify-between">
            <div className="pl-0.5">
              {t("common.number", {
                value: data.gpu.load,
                maximumFractionDigits: 2,
              })}
            </div>
            <div className="pr-1">{t("resources.load")}</div>
          </div>
        )}
        {data.gpu.usage != "undefined" ? <UsageBar percent={percent} /> : <div/>}
      </div>
    </div>
    
  );
}
