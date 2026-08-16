import { onMount, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header() {
    let [menu, setMenu] = createSignal();
    let menuOpenButton;

    onMount(() => {
        menuOpenButton.addEventListener("click", () => {
            menu().classList.add("open");
        })
    })

    return <header>
        <div class="logo-area">
            <A href="/">Sarah Collins</A>
        </div>

        <Navigation getMenu={setMenu}/>

        <div class="mobile-menu-button">
            <button ref={menuOpenButton}>
                <img src="/icons/menu.svg" alt="menu"></img>
            </button>
        </div>
    </header>
}