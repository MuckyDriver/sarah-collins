import { A } from "@solidjs/router";
import { onMount } from "solid-js";
import "./Navigation.css";

export default function Navigation(props) {
    let menuCloseButton;
    let menu;

    onMount(() => {
        props.getMenu(menu);

        menuCloseButton.addEventListener("click", () => {
            menu.classList.remove("open");
        })
    })

    return <nav ref={menu}>
        <button class="close-button" ref={menuCloseButton}>
            <img src="/icons/close.svg" alt="close"></img>
        </button>
        <ul>
            <li><A href="/" activeClass="active" end={true}>Home</A></li>
            <li><A href="/pianist" activeClass="active" end={true}>Pianist</A></li>
            <li><A href="/composer" activeClass="active" end={true}>Composer</A></li>
            <li><A href="/educator" activeClass="active" end={true}>Educator</A></li>
            <li><A href="/choral-leader" activeClass="active" end={true}>Choral Leader</A></li>
            <li><A href="/dj-random" activeClass="active" end={true}>DJRandom</A></li>
        </ul>
    </nav>
}