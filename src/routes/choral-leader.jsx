import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function ChoralLeader() {
    return (
        <main>
            <Title>Sarah Collins &bull; Choral Leader</Title>
            <Header />

            <div class="content">
                <section class="top">
                    <div class="info">
                        <h1>Choral Leader</h1>
                        <p>
                            She currently leads Woodfalls Village Singers and she established Downton Community Choir (from 2008-2012), and later, a chamber choir, Downton
                            Chamber Voices, who were filmed singing a carol by her for South Today for their Christmas broadcast in December 2016. She regularly arranges & composes
                            for her choir & others.
                        </p>
                        <p>
                            She led Celebrate Voice's 2018 Instachoir & Flashmob, as well as 2017 Corporate Choir and Instachoir and the 2016 Singing Weekend and Instachoir
                            Flashmob. She was Assistant Director for Salisbury International Festival's Voices of The Whale for the close of the 2017 festival. 
                        </p>
                    </div>
                </section>

                <section class="grid equal reverse">
                    <div class="image-container">
                        <img src="/images/choir/choir.jpeg" alt="choir 1"></img>
                    </div>
                    <div class="info">
                        <h2>Cranbourne & District Community Choir</h2>
                        <p>
                            She took over Cranbourne & District Community Choir in 2019 for 5 years after being a Locum Co-director for Jeremy Avis' in 2018, after he relocated 
                            to Bristol performing them at various events including Alderholt Church, for their summer concert 2019 and The Earth House in summer 2017.
                        </p>
                    </div>
                </section>

                <section class="grid equal">
                    <div class="info">
                        <h2>Salisbury International Festival's Whakatuwhera</h2>
                        <p>
                            She created and let part of the Salisbury International Festival's Whakatuwhera 2016 Opening Ceremony involving a chorus of 200 women's voices;
                            let one of the four choirs (Poultry Cross) for the 2015 Salisbury International Festival Opening celebrations Market Songs.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src="/images/choir/choir2.jpeg" alt="choir 2"></img>
                    </div>
                </section>

                <section class="grid equal">
                    <div class="image-container">
                        <img src="/images/choir/choir3.jpg" alt="choir 3"></img>
                    </div>
                    <div class="image-container">
                        <img src="/images/choir/choir4.jpeg" alt="choir 4"></img>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
