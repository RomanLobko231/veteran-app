import ContactsRow from '../contactsRow/ContactsRow';
import cl from './MainInfoComponent.module.css'


const MainInfoComponent = () => {
    return (
        <div className={cl.info__container}>
            <div className={cl.image__container}>
                <img src='./veteran_logo_edited.png' alt='veteran standing in blossoming, yellow-blue leaves' />

            </div>
            <div className={cl.info}>
                <div className={cl.text}>
                    <h1>Romny Veteran Support - хто, навiщo та де?</h1>
                    <p style={{whiteSpace: 'break-spaces'}}>{
                    `Ми - Всеукраїнська громадська організація заснована в 2015 році військовими та добровольцями, що приймали участь в Антитерористичній операції (АТО). Волонтери всіх філій нашої ГО розуміють унікальні виклики, з якими стикаються ветерани та колишні військові, коли вони повертаються до цивільного життя.\n\nНаша мета — пропонувати вам руку допомоги на цьому шляху. Незалежно від того, чи шукаєте ви пораду з юридичних питань, шукаєте можливість наступної кар’єри чи потребуєте підтримки в адаптації до повсякденного життя, не соромтеся зв’язуватися з нами за вказаними нижче контактами:`
                    }</p>
                </div>
                <ContactsRow/>
            </div>

        </div>
    );
};

export default MainInfoComponent;
