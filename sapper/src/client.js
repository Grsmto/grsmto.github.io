import * as sapper from "@sapper/app";

import "modern-normalize/modern-normalize.css";
import "../static/global.css";

sapper.start({
  target: document.querySelector("#sapper"),
});
