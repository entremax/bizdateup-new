"use client"
import React from 'react';
import ReactExport from 'react-data-export';
import { InvestmentType } from '@/types';
import * as XLSX from 'xlsx';

const ExcelExportButton = ({ investData }: { investData: InvestmentType[] }) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(new Blob([generateExcelFile()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    element.download = 'investment_details.xlsx';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateExcelFile = () => {
    const wsData = [investData.map((row) => [
      row.createdAt,
      row.investorName,
      row.type,
      row.status,
      row.amountBreakdown.totalamount || '-',
      row.amountBreakdown.convenienceFee || '-',
      row.amountBreakdown.tds || '-',
      row.amountBreakdown.gst || '-',
    ])];
    
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'InvestmentDetails');
    
    const result = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });
    return result;
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default ExcelExportButton;
