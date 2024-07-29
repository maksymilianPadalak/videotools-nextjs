import { FC } from "react";

export type Contact = { title: string; value: string };

type ContactUsProps = {
  contacts: Contact[];
};

export const ContactUs: FC<ContactUsProps> = ({ contacts }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <h2 className="text-5xl">Contact Us</h2>
      <ul className="py-10">
        {contacts.map((contact) => {
          return (
            <li className="py-2">
              {contact.title}: {contact.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
