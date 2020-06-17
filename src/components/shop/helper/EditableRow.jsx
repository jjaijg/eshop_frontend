import React from "react";
import PropTypes from "prop-types";

import { Form } from "antd";

export const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

EditableRow.propTypes = {
  props: PropTypes.object,
  index: PropTypes.any,
};

export default EditableRow;
