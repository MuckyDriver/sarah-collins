import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function Educator() {
    return (
        <main>
            <Title>Sarah Collins &bull; Educator</Title>
            <Header />

            <div class="content">
                <section class="top">
                    <div class="info">
                        <h1>Educator</h1>
                        <p>
                            Head of Music at The New Forest Small School, Lyndhurst. She has a small one to one practise at the school, teaching piano
                            and Trinity Tock & Pop vocals. (Started 2011). She teaches there 2 days a week.
                        </p>
                    </div>
                </section>

                <section class="image-flex">
                    <img src="/images/educator/educator.jpeg" alt="Educator" style="object-position: bottom"></img>
                    <img src="/images/educator/educator2.jpeg" alt="Educator 2"></img>
                    <img src="/images/educator/educator3.jpg" alt="Educator 3"></img>
                </section>
            </div>

            <Footer />
        </main>
    );
}
