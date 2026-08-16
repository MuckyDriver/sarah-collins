import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Sarah Collins Website</Title>
          <Meta name="author" content="DHCWeblogistics"></Meta>
          <Meta name="description" content="Official Sarah Collins website"></Meta>
          <Meta name="version" content="1.0.0"></Meta>

          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
