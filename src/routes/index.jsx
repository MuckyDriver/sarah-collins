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
                        <h2>Musician, composer, teacher & DJ</h2>
                        <p>
                            After studying Music and Composition at City University (with instrumental lessons at
                            Guildhall) and Sussex University, Sarah embarked on a roller-coaster, professional freelance
                            life in 1989 and hasn't looked back.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src="/images/PlayingAtHoratioGarden2023.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    </div>
                </section>

                <section class="image-flex">
                    <img src="/images/PlayingAtHoratioGarden2023.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    <img src="/images/PlayingAtHoratioGarden2023.jpeg" alt="Playing At Horatio Garden 2023"></img>
                    <img src="/images/djrandom.jpg" alt="DJ Random"></img>
                </section>
            </div>

            <Footer />
        </main>
    );
}
