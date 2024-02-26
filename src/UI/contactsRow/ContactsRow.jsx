import cl from './ContactsRow.module.css'
import { BiLogoGmail} from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
  return (
    <div className={cl.container}>
          <div className={cl.contacts__item}>
                <BiLogoGmail />
                <h2>romny.veteran@gmail.com</h2>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h2>+38 097 896 23 17</h2>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone/>
                <h2>+38 050 781 65 75</h2>
            </div>
        </div>
  );
};

export default ContactsRow;
