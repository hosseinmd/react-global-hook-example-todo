import React from "react";
import Link from "./Link";
import { Store } from "../store";

const Footer = () => (
  <>
    <div>
      <span>Show: </span>
      <Link filter={"SHOW_ALL"}>All</Link>
      <Link filter={"SHOW_ACTIVE"}>Active</Link>
      <Link filter={"SHOW_COMPLETED"}>Completed</Link>
    </div>
    <div>
      <button onClick={() => Store.actions.reset()}>Reset</button>
    </div>
  </>
);
export default Footer;
