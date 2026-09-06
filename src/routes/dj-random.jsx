import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function DJRandom() {
    return (
        <main>
            <Title>Sarah Collins &bull; DJ Random</Title>
            <Header />

            <div class="content">
                <section class="top grid equal reverse">
                    <div class="image-container">
                        <img class="" src="/images/dj/djrandom.jpg" alt="DJ Random"></img>
                    </div>
                    <div class="info">
                        <h1>DJ Random</h1>
                        <p>
                            Sarah has been the resident DJ of the Back Stage T & C Bar - Sunny's Bar (Formerly Theatre & Circus Green Room Stage), at Glastonbury Festival 
                            since 2013. She loved playing at Rimski's Yard, Glastonbury 2024 & 2025 and also at Small World Stage Glastonbury, and has obtained many other 
                            bookings, including Stroud Fringe Festival, Salisbury Arts Centre, Clivey Fest, Woodstock Farm Fest, private weddings, blessings, celebrations and 
                            many others, listed on her Insta & FaceBook pages. DJ Random has a strong young woman fan-base at Glastonbury, though hopes to inspire more women 
                            DJs through her work.
                        </p>
                    </div>
                </section>
                <section class="grid equal">
                    <div class="info">
                        <p style="margin-block: 0em;">
                            As DJ Random, Sarah plays an eclectic mix of groovy music from many differing genres and times, from the 1930's to the present day. Her DJing gigs are 
                            treated like any artistic performance, where she reads her audience and what they are enjoying and goes with the mood, never using a set list. Sarah is 
                            used to working around band set ups and set downs and doesn't mind performing really late. She also MC's her gigs, happy to introduce other performers, 
                            birthday acknowledgements and so forth. 
                        </p>
                    </div>
                    <div class="image-container">
                        <img class="" src="/images/dj/djrandom2.jpeg" alt="DJ Random"></img>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
