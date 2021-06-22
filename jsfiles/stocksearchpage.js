import React, {Component} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-native-table";

export default class Stocksearchpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // tableTitle : props.tableTitle,
            DataTable : props.DataTable,
            shouldweShow : props.shouldweShow

        }


    }

    

    // setShouldShow = () => {

    //   const state = this.state;

    //   if (state.shouldweShow) return null;

    //     return (
    //             <Text>HelloMan</Text>
    //               // <View>
    //         //     <Table>
    //         //         <Col data={state.tableTitle}/>
    //         //         <Rows data={state.DataTable}/>
    //         //     </Table>
    //         // </View>
    //     );
    // //   }
    // //   continue;
    // };

    render () {

        const state = this.state;



        if (state.shouldweShow) {

            console.log("hellobossim_NOT_here");

            return null;
        }else{
            console.log("hellobossimhere");
            return (
            <BootstrapTable data={state.DataTable} striped={true}>
                <TableHeaderRow dataField= "companyName" >ID</TableHeaderRow>
                <TableHeaderRow dataField="mktCap" >Name</TableHeaderRow>
                <TableHeaderRow dataField="price" >Name</TableHeaderRow>

                {/* <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn> */}
            </BootstrapTable>
            );
        }
    }

}
    // datafile['legend'].push("companyName" , "mktCap" , "price" , "image" );
