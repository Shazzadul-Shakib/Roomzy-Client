export type RoomPageProps = {
  params: {
    id: string;
  };
};
export type ModalBodyProps= {
  modal: React.ReactNode;
}
export type CardCloseProps ={
  onClose: () => void;
}
export type FormValues= {
  title: string;
  price: string;
  location: string;
  details: string;
  amenities: string;
}
