import React, {Component} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-native-table';

export default class Stocksearchpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            tableTitle : props.tableTitle,
            DataTable : props.DataTable,
            shouldShow : false

        }


    }

    setShouldShow = () => {

      const state = this.state;

      if (state.shouldShow) return null;

        return (
            <BootstrapTable data={state.DataTable} striped={true} hover={true}>
                <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Value</TableHeaderColumn>
            </BootstrapTable>
        );
    //   }
    //   continue;
    };

    render = () => {

       setShouldShow();

    }

}

