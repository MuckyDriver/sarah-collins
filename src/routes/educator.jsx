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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, suscipit ut nam facilis velit possimus. 
                            In magnam dolorum minus, dicta vel commodi, sint nulla hic ea soluta eius molestiae ex enim!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
