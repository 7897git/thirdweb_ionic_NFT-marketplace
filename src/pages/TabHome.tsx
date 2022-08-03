import { IonContent, IonAvatar, IonHeader, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Button';
import './Home.scss';
import avatar from "../bucket/image/ava.png";
import ImagePost from "../bucket/image/halo.jpg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
            <Button />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <div className="container_fluid">
                <IonCard className="bannerHome">
                    <IonAvatar className="avatar"><img src={avatar} alt="avatar" /></IonAvatar>
                </IonCard>
        <div className="postContent">
            <IonCard className="postCard">
                <img src={ImagePost} className="imagePost" alt="" />
            <IonCardHeader>
                <IonCardTitle>Title</IonCardTitle>
            </IonCardHeader>
                <IonCardContent>
                    Lorem Ipsum dollor siamet bla... bla... bla...
                </IonCardContent>
            </IonCard>
        </div>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
