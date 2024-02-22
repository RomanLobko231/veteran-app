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
                    <h1>A big title to draw attention</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis efficitur sapien. Suspendisse pellentesque vitae lectus eu maximus. Suspendisse lobortis risus ligula, imperdiet placerat ex sollicitudin eu. Duis et imperdiet arcu. Phasellus bibendum faucibus nulla eget condimentum. Nulla blandit varius eros sit amet varius. Phasellus neque sapien, tincidunt id iaculis eget, convallis at nisi. Phasellus faucibus ligula in porta luctus. Phasellus eros justo, consequat eu suscipit a, lacinia sed magna. Curabitur interdum felis ante, in vulputate tellus luctus sit amet. Fusce ac quam tincidunt, lacinia sapien eu, sagittis turpis. Sed cursus velit ac faucibus sollicitudin. Sed non metus nec odio dignissim feugiat ut ac felis. Quisque magna metus, vehicula a varius vitae, euismod et nunc.</p>
                </div>
                <ContactsRow/>
            </div>

        </div>
    );
};

export default MainInfoComponent;
