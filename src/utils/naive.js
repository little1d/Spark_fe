import {NIcon} from "naive-ui";

function renderIcon(icon) {
    return () => h(NIcon, null, {default: () => h(icon)});
}

export default renderIcon