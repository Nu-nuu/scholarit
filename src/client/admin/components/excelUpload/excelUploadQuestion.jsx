import React from 'react';
import { Button, Upload } from 'antd';
import * as XLSX from 'xlsx';

const ExcelUploadQuestion = ({ onExcelDataUpload }) => {
    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming the data is in the first sheet
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            if (jsonData.length > 0) {
                // You can modify this part to correctly parse the Excel data for a single question
                const row = jsonData[0];
                const question = {
                    text: row.text,
                    type: row.type,
                    difficult: row.difficult,
                    option1: row.option1,
                    option2: row.option2,
                    option3: row.option3,
                    option4: row.option4,
                    option5: row.option5,
                    chapterId: row.chapterId,
                    answer: row.answer
                };

                if (isValidData(question)) {
                    onExcelDataUpload(question);
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
        // You can add your validation logic here
        return (
            typeof data.text === 'string' &&
            typeof data.type === 'string' &&
            typeof data.difficult === 'string' &&
            typeof data.option1 === 'string' &&
            typeof data.option2 === 'string' &&
            typeof data.option3 === 'string' &&
            typeof data.option4 === 'string' &&
            typeof data.option5 === 'string' &&
            typeof data.chapterId === 'number' &&
            typeof data.answer === 'string'
        );
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


export default ExcelUploadQuestion;
