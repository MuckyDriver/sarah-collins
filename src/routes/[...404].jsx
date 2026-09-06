import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import Header from "~/components/Header";

export default function NotFound() {
    return (
        <main>
            <Title>Page Not Found</Title>
            <HttpStatusCode code={404} />

            <span>No webpage with this url exists.</span>
        </main>
    );
}