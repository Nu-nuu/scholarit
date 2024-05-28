import React from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';

export const createQuizTemplate = () => {
    const sampleData = {
        name: "Quiz Name",
        duration: 0,
        chapterId: 0,
        questionIdList: [1, 2, 3], 
      };
    

    const headers = Object.keys(sampleData);

    const data = [headers, Object.values(sampleData)];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Quiz_Template');

    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Quiz_Template.xlsx';
    a.click();
};



const TemplateQuiz = () => {
    const handleDownload = () => {
        createQuizTemplate();
    };

    return (
        <div>
            <Button onClick={handleDownload}>Download Template</Button>
        </div>
    );
}

export default TemplateQuiz