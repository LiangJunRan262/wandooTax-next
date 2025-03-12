import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import Nav from "@/app/component/Nav";
import ServiceClass from "@/app/component/ServiceClass";
import IndustryClass from "@/app/component/IndustryClass";
import Commitment from "@/app/component/Commitment";
import KnowUs from "@/app/component/KnowUs";
import Tool from "@/app/component/Tool";
import Footer from "@/app/component/Footer";

Amplify.configure(outputs);

export default function App() {

    return (
        <main>
            <Nav />
            <ServiceClass />
            <IndustryClass />
            <Commitment />
            <KnowUs />
            <Tool />
            <Footer />
        </main>
    );
}
