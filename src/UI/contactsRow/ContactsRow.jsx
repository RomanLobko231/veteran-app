import cl from './ContactsRow.module.css'
import { TiMail } from "react-icons/ti";

import { MdLocalPhone } from "react-icons/md";

const ContactsRow = () => {
  return (
    <div className={cl.container}>
          <div className={cl.contacts__item}>
                <TiMail style={{height: '30px', width: '30px'}} />
                <h2>romny.veteran@gmail.com</h2>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone style={{height: '25px', width: '25px'}}/>
                <h2>+38 097 896 23 17</h2>
            </div>
            <div className={cl.contacts__item}>
                <MdLocalPhone style={{height: '25px', width: '25px'}}/>
                <h2>+38 050 781 65 75</h2>
            </div>
        </div>
  );
};

export default ContactsRow;
