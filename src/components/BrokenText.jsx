import { For } from "solid-js";
import "./BrokenText.css";

export default function BrokenText(props) {
    let text = props.text.split('');

    return <span class="brokentext">
        <For each={text}>
            {(item, index) => <span>{item}</span>}
        </For>
    </span>
}