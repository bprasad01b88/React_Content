import * as FileSaver from "file-saver";
import { Button, Col, Container, Row } from "react-bootstrap";
import XLSX from 'sheetjs-style';

const ExportExcel = ({excelData, fileName}) => {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = '.xlsx';

    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets : { 'data' : ws}, SheetNames : ['data']}
        const excelBuffer = XLSX.write(wb, { bookType : 'xlsx', type : 'array'});
        const data = new Blob([excelBuffer], { type : fileType})
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <>
            <Container fluid className="mt-2">
                <Row>
                    <Col>
                        <Button className="btn btn-primary" onClick={() => exportToExcel(fileName)}>Export To Excel</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExportExcel;