import cl from './ContactsRow.module.css'
import { BiLogoGmail} from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
  return (
    <div className={cl.container}>
          <div className={cl.contacts__item}>
                <BiLogoGmail />
                <h2>email@gmail.com</h2>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h2>+380956783456</h2>
            </div>
        </div>
  );
};

export default ContactsRow;
