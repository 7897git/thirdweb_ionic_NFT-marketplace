import { IonAvatar, IonCard } from '@ionic/react';
import avatar from "../bucket/image/ava.png";
import '../pages/Home.scss';

const Banner: React.FC = () => {
  return (
<IonCard className="bannerHome">
    <IonAvatar className="avatar">
        <img src={avatar} alt="avatar" />
    </IonAvatar>
</IonCard>
  );
};

export default Banner;
                    
