import { Title, Meta } from "@solidjs/meta";
import { onMount } from "solid-js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PageHeader from "~/components/PageHeader";

export default function ChoirLeader() {
    return (
        <main>
            <Title>Sarah Collins &bull; Choir Leader</Title>
            <Header />

            <div class="content">
                <section class="top">
                    <div class="info">
                        <h1>Choir Leader</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequatur laboriosam voluptate ea aut praesentium assumenda, quaerat voluptatibus quo 
                            architecto sequi tempora sed voluptates perspiciatis incidunt magnam dolorem excepturi?
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
