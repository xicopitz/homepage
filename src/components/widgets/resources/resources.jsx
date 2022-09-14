import Disk from "./disk";
import Cpu from "./cpu";
import Gpu from "./gpu";
import Memory from "./memory";

export default function Resources({ options }) {
  const { expanded } = options;
  return (
    <div className="flex flex-col max-w:full sm:basis-auto self-center m-auto flex-wrap">
      <div className="flex flex-row self-center flex-wrap justify-between">
        {options.cpu && <Cpu expanded={expanded} />}
        {options.gpu && <Gpu expanded={expanded} />}
        {options.memory && <Memory expanded={expanded} />}
        {Array.isArray(options.disk)
          ? options.disk.map((disk) => <Disk key={disk} options={{ disk }} expanded={expanded} />)
          : options.disk && <Disk options={options} expanded={expanded} />}
      </div>
      {options.label && (
        <div className="ml-6 pt-1 text-center text-theme-800 dark:text-theme-200 text-xs">{options.label}</div>
      )}
    </div>
  );
}
