'use client'
import React, { useEffect, useState } from 'react'
import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { formatCustomDate } from '@/lib/utils'
import Export from '@/icons/Export'

const generatePdfBlob = (
  columnDefinitions: { accessor: string; name: string; fieldType: string }[],
  rowData: any[][],
) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: columnDefinitions.length > 3 ? 'column' : 'column',
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
      flexGrow: 1,
      textAlign: 'center',
    },
    headerCell: {
      backgroundColor: '#F0F0F0',
      fontWeight: 'bold',
      flexGrow: 1,
      textAlign: 'center',
    },
    headerText: {
      fontSize: 12,
    },
    cellText: {
      fontSize: 10,
    },
  })

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
        orientation={columnDefinitions.length > 4 ? 'landscape' : 'portrait'}>
        <View style={styles.section}>
          <Text>Investment Details</Text>
          <View style={styles.table}>
            {/* Render header row based on column definitions */}
            <View style={styles.tableRow}>
              {columnDefinitions.map((column, index) => (
                <View key={index} style={styles.headerCell}>
                  <Text style={styles.headerText}>{column.name}</Text>
                </View>
              ))}
            </View>

            {/* Render data rows based on row data */}
            {rowData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.tableRow}>
                {row.map((cell: any, colIndex: number) => (
                  <View key={colIndex} style={styles.tableCell}>
                    <Text style={styles.cellText}>
                      {columnDefinitions[colIndex].fieldType === 'Date'
                        ? formatCustomDate(cell).toString()
                        : cell}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}

const Investments = ({
  columnDefinitions,
  rowData,
}: {
  columnDefinitions: { accessor: string; name: string; fieldType: string }[]
  rowData: any[][]
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div>
      {isClient ? (
        <PDFDownloadLink
          document={generatePdfBlob(columnDefinitions, rowData)}
          fileName="investment_details.pdf">
          {({ loading }: { loading: boolean }) =>
            loading ? 'Loading document...' : <Export />
          }
        </PDFDownloadLink>
      ) : (
        'Loading document...'
      )}
    </div>
  )
}

export default Investments
