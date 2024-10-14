import React, { useEffect, useRef, useState } from "react";
import * as XLSX from 'xlsx';
import { saveAs } from "file-saver";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import CustomContextMenu from "../../components/CustomContextMenu/CustomMenuContext";

const ExportExcel = ({ data, fileName }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const printRef = useRef();

    const handleContextMenu = (event) => {
        event.preventDefault();
        setXPos(event.pageX);
        setYPos(event.pageY);
        setShowMenu(true);
    };

    const handleClick = () => {
        setShowMenu(false);
    };

    const exportToExcel = () => {
        // Create a new workbook
        const wb = XLSX.utils.book_new();

        // convert data to worksheet
        const ws = XLSX.utils.json_to_sheet(data);

        // append the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, fileName);

        // Generate the binary string for the excel file
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

        // create a buffer from the binaru string
        const buffer = new ArrayBuffer(wbout.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < wbout.length; ++i) {
            view[i] = wbout.charCodeAt(i) & 0xFF;
        }

        // Save the buffer as an excel file
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        saveAs(blob, `${fileName}.xlsx`);
    }

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (


        <Container fluid>
            <Row className="mt-2">
                <Col md={12} className="d-flex justify-content-center gap-2">
                    <Button className="btn btn-secondary" onClick={() => exportToExcel()}>
                        Export To Excel
                    </Button>
                    <Button className="btn btn-primary" onClick={handlePrint}>Print</Button>
                </Col>

            </Row>
            <Row className="mt-2">
                <Col md={12}>
                    <div onContextMenu={handleContextMenu}>
                        <Table border="1" className="m-0" ref={printRef} >
                            <thead className="table-head">
                                <tr>
                                    {Object.keys(data[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {data?.map((item, index) => (
                                    <tr key={index}>
                                        {Object.values(item)?.map((val, i) => (
                                            <td key={i}>{val}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <CustomContextMenu
                            xPos={xPos}
                            yPos={yPos}
                            showMenu={showMenu}
                            onExport={exportToExcel}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ExportExcel;