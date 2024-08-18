import { Drawer } from "antd";
import UserForm from "./ClientForm";
import "./styles.css";
import { Client } from "../../../type/type";

interface Props {
  onClose: () => void;
  open: boolean;
  records: Client | null;
  refetch: () => void;
}

const ClientDrawer = ({ onClose, open, records, refetch }: Props) => {
  return (
    <>
      <Drawer
        title={records ? "Update Client" : "Create Client"}
        width={540}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}>
        <UserForm onClose={onClose} initialValues={records} refetch={refetch} />
      </Drawer>
    </>
  );
};

export default ClientDrawer;
