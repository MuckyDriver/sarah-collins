import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import { A } from "@solidjs/router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

import AudioPlayer from "~/components/AudioPlayer";

export default function Composer() {
    return (
        <main>
            <Title>Sarah Collins &bull; Composer</Title>
            <Header />

            <div class="content">
                <section class="top grid">
                    <div class="info">
                        <h1>Composer</h1>
                        <p>
                            Her extensive composing, performing and musical directing work includes collaborations with Ian Spink, Fast and Dirty Aberdeen;
                            {" "}<A href="https://www.leedsplayhouse.org.uk/" target="_blank">The West Yorkshire Playhouse</A>{" "}
                            (with Jude Kelly and Patrick Stewart) Johnson Over Jordan.
                            {" "}<A href="https://www.rsc.org.uk/" target="_blank">The Royal Shakespeare Company;</A>{" "}
                            Mysteria, (with Rae Smith), The Royal National Theatre; Army's View; Hamlet,
                            The David Glass Ensemble; Gormenghast; Lucky (with Rae Smith) and Off The Wall, Arc Dance Company; Peer Gynt.
                            Several shows for award-winning experimental children's theatre company,
                            {" "}<A href="https://theatre-rites.co.uk/" target="_blank">Theatre Rites</A>,{" "}
                            and more recently, the fabulous Salisbury based Hoodwink Theatre.
                        </p>
                    </div>
                    <div class="image-container">
                        <img src="/images/composer/composer2.jpg" class="bottom" alt="Composer"></img>
                    </div>
                </section>

                <section class="grid equal">
                    <div class="list">
                        <h2 class="list-title">
                            <img src="/icons/music_note.svg" alt="i" width="28"></img><span>Composed Music</span>
                        </h2>

                        <AudioPlayer file="/audio/AutumnHaze.mp3" title="Autumn Haze"/>
                        <AudioPlayer file="/audio/CarillonPerfectDay.mp3" title="Carillon Perfect Day"/>
                        <AudioPlayer file="/audio/CatAndMouse.mp3" title="Cat & Mouse"/>

                        <A class="button" href="https://soundcloud.com/sara-63" target="_blank">
                            <i class="fa fa-soundcloud" aria-hidden="true"></i><span>More on Soundcloud</span>
                        </A>
                    </div>
                    <div class="info">
                        <h2>Silver Salisbury Jubilee</h2>
                        <p>
                            She was commissioned to write two songs for the Silver Salisbury Jubilee Project Summer/Autumn 2022, which were performed 
                            at Salisbury Guildhall with 2 schools and various elder singers.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
