import React from 'react';
import { Button, Upload } from 'antd';
import * as XLSX from 'xlsx';

const ExcelUploadQuiz = ({ onExcelDataUpload }) => {
    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming the data is in the first sheet
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            if (jsonData.length > 0) {
                // Modify this part to correctly parse questionIdList as an array of integers
                const firstRow = jsonData[0];
                const questionIds = firstRow.questionIdList.split(',').map(Number);

                if (isValidData(questionIds)) {
                    const quizData = {
                        name: firstRow.name,
                        duration: firstRow.duration,
                        chapterId: firstRow.chapterId,
                        questionIdList: questionIds
                    };
                    onExcelDataUpload(quizData);
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
        return Array.isArray(data) && data.every(Number.isInteger);
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

export default ExcelUploadQuiz;
