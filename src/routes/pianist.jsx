import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function Pianist() {
    return (
        <main>
            <Title>Sarah Collins &bull; Pianist</Title>
            <Header />

            <div class="content">
                <section class="grid reverse top">
                    <div class="image-container">
                        <img class="bottom" src="images/pianist/WinterWonderlandSalsCathedral.jpeg" alt="Winter Wonderland Sals Cathedral"></img>
                    </div>
                    <div class="info">
                        <img class="static" style="--x: calc(100% - 130px); --y: calc(100% - 130px);" src="icons/piano.svg" width={120} alt="static"></img>
                        <h1>Pianist</h1>
                        <p>
                            She was a pianist (channeling the spirit of Mrs Mills) for Hoodwink Theatre's Winter's Trail immersive installation piece in December 2016
                            at Salisbury Cathedral, as well as writing the now legendary Farewell To Brownsea for Hoodwink's installation piece on Brownsea Island.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
