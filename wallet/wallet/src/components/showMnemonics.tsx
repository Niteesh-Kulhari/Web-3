import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function ShowMnemonics() {
  return (
    <Accordion className="border border-gray-300 rounded-md border-none overflow-hidden">
      <AccordionItem
        key="1"
        title="Secret Phrase"
        className="bg-gray-50 text-gray-800 hover:bg-gray-100"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam nulla, ut ullam doloremque tempore maiores,
        harum fugiat inventore suscipit dolor corrupti neque labore architecto magnam doloribus ipsum ipsa quis?
      </AccordionItem>
    </Accordion>
  );
}
