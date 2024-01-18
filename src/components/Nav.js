import Route from '../Route.js';
import { TiUserAdd } from "react-icons/ti";
import { TbReportAnalytics, TbSettingsFilled } from "react-icons/tb";

function Nav({ route, changeRoute, onAddClient }) {
  const commonClasses   = "rounded-lg";
  const activeClasses   = `bg-cyan-600 ${commonClasses}`;
  const inactiveClasses = `bg-cyan-800 ${commonClasses}`;

  return (
    <nav className="w-28 bg-cyan-900">
      <ul className="flex flex-col items-center gap-2 my-4">
        <li className={route === Route.Reports ? activeClasses : inactiveClasses}>
          <a href="#clients" onClick={changeRoute(Route.Reports)}><TbReportAnalytics size="4rem" /></a>
        </li>
        <li className={route === Route.EditClient ? activeClasses : inactiveClasses}>
          <a href="#edit-client" onClick={onAddClient}><TiUserAdd size="4rem" /></a>
        </li>
        <li className={"mt-auto " + (route === Route.Settings ? activeClasses : inactiveClasses)}>
          <a href="#settings" onClick={changeRoute(Route.Settings)}><TbSettingsFilled size="4rem" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
