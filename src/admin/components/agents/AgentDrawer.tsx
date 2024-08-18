import { Drawer } from "antd";
import AgentForm from "./AgentForm";
import "./styles.css";
import { Agent } from "../../../type/type";

interface Props {
  onClose: () => void;
  open: boolean;
  records: Agent | null;
  refetch: () => void;
}

const AgentDrawer = ({ onClose, open, records, refetch }: Props) => {
  return (
    <>
      <Drawer
        title={records ? "Update Agent" : "Create Agent"}
        width={540}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}>
        <AgentForm
          onClose={onClose}
          initialValues={records}
          refetch={refetch}
        />
      </Drawer>
    </>
  );
};

export default AgentDrawer;
