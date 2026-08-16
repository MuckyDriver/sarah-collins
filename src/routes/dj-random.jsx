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
                        <img class="" src="/images/djrandom.jpg" alt="DJ Random"></img>
                    </div>
                    <div class="info">
                        <h1>DJ Random</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tempora quam sapiente, praesentium impedit quidem. Incidunt assumenda amet doloribus quod sed. 
                            Magni sequi maiores dolores, cupiditate architecto non dolorem sit temporibus repellat illum.
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
