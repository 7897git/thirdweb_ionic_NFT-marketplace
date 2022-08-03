import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import PostList from '../components/post/postList';
import './Home.scss';

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
              <Banner />
              <PostList />
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
