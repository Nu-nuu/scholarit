import React from 'react';
import { Button, Upload } from 'antd';
import * as XLSX from 'xlsx';

const ExcelUpload = ({ onExcelDataUpload }) => {
    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming the data is in the first sheet
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            if (jsonData.length > 0) {
                const firstRow = jsonData[0];
                const resourceData = firstRow; 

                if (isValidData(resourceData)) {
                    onExcelDataUpload(resourceData);
                } else {
                    console.error('Invalid data from Excel file.');
                }
            } else {
                console.error('Empty Excel file');
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const isValidData = (data) => {
        return true; 
    };

    return (
        <div>
            <Upload
                beforeUpload={(file) => {
                    handleFileUpload(file);
                    return false; 
                }}
                showUploadList={false}
            >
                <Button>Upload Excel File</Button>
            </Upload>
        </div>
    );
};

export default ExcelUpload;
