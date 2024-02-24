import ContactsRow from '../contactsRow/ContactsRow';
import cl from './MainInfoComponent.module.css'


const MainInfoComponent = () => {
    return (
        <div className={cl.info__container}>
            <div className={cl.image__container}>
                <img src='./veteran_logo.jpg' alt='soldier shakes hands with another man' />

            </div>
            <div className={cl.info}>
                <div className={cl.text}>
                    <h1>Romny Veteran Support - хто, навiщo та де?</h1>
                    <p style={{whiteSpace: 'break-spaces'}}>{
                    `Ми - Всеукраїнська громадська організація заснована в 2015 році військовими та добровольцями, що приймали участь в Антитерористичній операції (АТО). У RVS ми розуміємо унікальні виклики, з якими стикаються ветерани та колишні військові, коли вони повертаються до цивільного життя.\n\nНаша мета — пропонувати вам руку допомоги на цьому шляху. Незалежно від того, чи шукаєте ви пораду з юридичних питань, шукаєте можливість наступної кар’єри чи потребуєте підтримки в адаптації до повсякденного життя, не соромтеся зв’язуватися з нами за вказаними нижче контактами.\n\nРазом ми працюватимемо над подоланням перешкод і побудовою вашого повноцінного життя!`
                    }</p>
                </div>
                <ContactsRow/>
            </div>

        </div>
    );
};

export default MainInfoComponent;
