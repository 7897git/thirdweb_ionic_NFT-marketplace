import 
{ IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRouterLink } 
from '@ionic/react';
import '../../pages/Home.scss';
import ImagePost from "../../bucket/image/halo.jpg";

const postList: React.FC = () => {
  return (
<div className="postContent">
    <IonRouterLink href="#">
        <IonCard className="postCard">
                <img src={ImagePost} className="imagePost" alt="" />
            <IonCardHeader>
                <IonCardTitle>Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            Lorem Ipsum dollor siamet bla... bla... bla...
            </IonCardContent>
        </IonCard>
    </IonRouterLink>
</div>
  );
};

export default postList;
