'use client'
import Modal from "@/app/component/UI/Modal";
import { useState } from "react";

export default function LanguageModal() {

    const [isOpen, setIsOpen] = useState(true);

    return <Modal isOpen={isOpen}>

    </Modal>
}