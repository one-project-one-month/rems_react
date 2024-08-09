import { Drawer } from "antd";
import "./styles.css";
import PropertiesForm from "./PropertiesForm";
import { ItemProps } from "./PropertyCard";

interface IProps {
  onClose: () => void;
  open: boolean;
  data: ItemProps[] | null;
}

const PropertyDrawer = ({ onClose, open, data }: IProps) => {
  return (
    <>
      <Drawer
        title={data ? "Update Properties" : "Create Properties"}
        width={540}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <PropertiesForm onClose={onClose} initialValues={data} />
      </Drawer>
    </>
  );
};

export default PropertyDrawer;
