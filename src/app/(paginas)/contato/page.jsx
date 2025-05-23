"use client";

import Form from "@/components/_components/Form";
import { SectionSticky } from "@/components/_components/SectionSticky";

export default function contactPage() {
 return (
  <SectionSticky titleStickyOnMobile="Contato" className="w-[95%] md:w-full">
   <Form />
  </SectionSticky>
 );
}
