"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { useTranslations } from "next-intl";
import '@aws-amplify/ui-react/styles.css';
import Nav from "@/app/component/Nav";
import ServiceClass from "@/app/component/ServiceClass";
import IndustryClass from "@/app/component/IndustryClass";


Amplify.configure(outputs);

export default function App() {

    const t = useTranslations();

    return (
        <main>
            <Nav />
            <ServiceClass />
            <IndustryClass />
        </main>
    );
}
