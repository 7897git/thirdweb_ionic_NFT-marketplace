import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { IonButtons, IonButton } from '@ionic/react';

const Button: React.FC = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  return (
    <>
      {address ? (
        <>
          <p>Your address: {address}</p>
        <IonButtons slot="end">
          <IonButton color="danger" onClick={disconnectWallet}>Disconnect Wallet</IonButton>
        </IonButtons>
        </>
     ) : (
        <IonButtons slot="end">
        <IonButton color="primary" onClick={connectWithMetamask}>Connect with Metamask</IonButton>
        </IonButtons>
      )}
    </>
  );
};

export default Button;
