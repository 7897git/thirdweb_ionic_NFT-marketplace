import React, { useRef, useState } from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { IonButtons, IonButton, IonIcon, IonChip, IonPopover } from '@ionic/react';
import { wallet, logOut } from 'ionicons/icons';

const Button: React.FC = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };
  return (
    <>
        <IonButtons style={{padding: "0 20px", cursor: 'pointer'}} slot="end">
        <IonIcon icon={wallet} slot="icon-only" color="primary" onClick={openPopover} />
        </IonButtons>
        <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
      {address ? (
        <>
          <IonChip color="primary" slot="end" onClick={disconnectWallet}>{address.slice(0, 2).concat("-").concat(address.slice(-4))}
          <IonIcon icon={logOut} color="danger" /></IonChip>
        </>
     ) : (
<>
            <IonButton expand="block" fill="outline" onClick={connectWithMetamask}>Login</IonButton>
</>
      )}
        </IonPopover>
    </>
  );
};

export default Button;
