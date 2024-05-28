import React from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';

export const createCourseTemplate = () => {
  const sampleData = {
    name: "Course Name",
    description: "Course Description",
    author: "Author Name",
    price: 0,
    discount: 0,
    categoryId: 0,
  };

  const headers = Object.keys(sampleData);

  const data = [headers, Object.values(sampleData)];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  XLSX.utils.book_append_sheet(wb, ws, 'Course_Template');

  const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const url = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Course_Template.xlsx';
  a.click();
};


const TemplateFile = () => {
  const handleDownload = () => {
    createCourseTemplate();
  };

  return (
    <div>
      <Button onClick={handleDownload}>Download Template</Button>
    </div>
  );
};

export default TemplateFile;
