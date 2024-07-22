import { Drawer } from "antd";
import UserForm from "./ClientForm";
import { DataType } from "./ClientList";
import "./styles.css";

interface Props {
  onClose: () => void;
  open: boolean;
  records: DataType | null;
}

const ClientDrawer = ({ onClose, open, records }: Props) => {
  return (
    <>
      <Drawer
        title={records ? "Update User" : "Create User"}
        width={540}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}>
        <UserForm onClose={onClose} initialValues={records} />
      </Drawer>
    </>
  );
};

export default ClientDrawer;
