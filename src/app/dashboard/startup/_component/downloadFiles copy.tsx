"use client";
import React , {useEffect , useState} from 'react';
import { Document, Page, View, Text, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { StartupInvestment, InvestmentType } from '@/types';
import { formatCustomDate } from "@/lib/utils";
  import Export from "@/icons/Export"

const generatePdfBlob = (investData: StartupInvestment) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    table: {
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    tableCell: {
      padding: 10,
      borderWidth: 1,
      flexGrow: 1, // Make each cell take space based on content
    },
    headerCell: {
      backgroundColor: '#F0F0F0',
      fontWeight: 'bold',
      flexGrow: 1, // Make each header cell take space based on content
    },
    headerText: {
      fontSize: 12,
    },
    cellText: {
      fontSize: 10,
    },
  });
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Investment Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>sl</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Date</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Investor Name</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Type</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Status</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Amount - ₹</Text>
              </View>
            </View>
            {investData?.map((investment, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text>{index}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{formatCustomDate(investment.createdAt).toString()}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{investment.investorName}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{investment.type}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{investment.status}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{investment.amountBreakdown?.amount}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const Investments = ({ investData }: { investData: StartupInvestment }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div>
{isClient?
      <PDFDownloadLink document={generatePdfBlob(investData)} fileName="investment_details.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Export/>)}
      </PDFDownloadLink>:'Loading document...'
}
    </div>
  );
};

export default Investments;
