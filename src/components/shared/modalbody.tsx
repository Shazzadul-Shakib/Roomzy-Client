import { ModalBodyProps } from "@/types/all-types";

const ModalBody: React.FC<ModalBodyProps> = ({ modal }) => {
  return (
    <div className="fixed inset-0 top-0 flex items-center justify-center bg-black bg-opacity-30">
      {modal}
    </div>
  );
};

export default ModalBody;
