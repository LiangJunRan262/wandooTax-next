'use client';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import ServiceClass from "@/app/component/ServiceClass";
import IndustryClass from "@/app/component/IndustryClass";
import Commitment from "@/app/component/Commitment";
import CaseList from "@/app/component/CaseList";
import Tool from "@/app/component/Tool";
import Footer from "@/app/component/Footer";
import Process from "@/app/component/Process";
import SubmitMethod from "@/app/component/SubmitMethod";
import Banner from "@/app/component/Banner";
import LanguageModal from "@/app/component/LanguageModal";
import { ScrollView } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function App() {
    return <>
        <ScrollView id="scrollViewDev">
            <Banner />
            <div id="anchor"></div>
            <ServiceClass />
            <IndustryClass />
            <Commitment />
            <CaseList />
            <Process />
            <SubmitMethod />
            <Tool />
            <Footer />
        </ScrollView>
        <LanguageModal />
    </>;
}
