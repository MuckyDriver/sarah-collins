import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function Home() {
    return (
        <main>
            <Title>Sarah Collins &bull; Home</Title>
            <Header />

            <div class="content">
                <section class="grid top">
                    <div class="info">
                        <img class="static" style="--x: calc(100% - 160px); --y: calc(100% - 160px);" src="/icons/music_note.svg" width={160} alt="static"></img>
                        <h2>Pianist, composer, educator, choral leader, DJ.</h2>
                        <p>
                            Sarah Collins has worked in all these areas and more
                            during her eclectic musical career. Not to mention her
                            consistent Creative Heath Care work in recent years, as
                            this area becomes more accepted & valued by Health
                            Care Professionals.
                        </p>
                        <p>
                            Use the menu buttons to find out more detail, and feel free to contact for further enquiries/bookings.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src="/images/pianist/PlayingAtHoratioGarden2023.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    </div>
                </section>

                <section class="image-flex">
                    <img src="/images/composer/composer3.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    <img src="/images/choir/choir2.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    <img src="/images/dj/djrandom1.jpeg" alt="DJ Random"></img>
                </section>
            </div>

            <Footer />
        </main>
    );
}
