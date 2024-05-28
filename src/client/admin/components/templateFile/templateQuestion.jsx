import React from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';

const createQuestionTemplate = () => {
    const sampleData = {
        text: "Question Text",
        type: "Question Type",
        difficult: "Difficulty Level",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
        option4: "Option 4",
        option5: "Option 5",
        chapterId: 0, // Provide a default chapter ID if needed
        answer: "Correct Answer",
    };

    const headers = Object.keys(sampleData);

    const data = [headers, Object.values(sampleData)];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'Question_Template');

    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const url = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Question_Template.xlsx';
    a.click();
};

const TemplateQuestion = () => {
    const handleDownload = () => {
        createQuestionTemplate();
    };

    return (
        <div>
            <Button onClick={handleDownload}>Download Template</Button>
        </div>
    );
};

export default TemplateQuestion;
