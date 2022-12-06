import React, { memo } from "react";
import Table from "react-bootstrap/Table";

const TableLayout = ({ children, headers }) => {
    return (
        <Table striped bordered hover size="sm" responsive className="process-table">
            <thead>
            <tr>
                {headers && headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </Table>
    );
};

export default memo(TableLayout);
