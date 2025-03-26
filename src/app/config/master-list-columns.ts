import * as moment from "moment";

export class MasterListColumns {
  public static triplistcolumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'tripNumber',
      displayName: 'Trip No',
      type: 'string'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.date).format("DD-MM-YYYY HH-MM")

    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'customerName',
      displayName: 'Customer Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'visitingPlace',
      displayName: 'Visiting Place',
      type: 'string',
      align: 'center'
    },
    {
      name: 'driverName', // from_entity_type_code
      displayName: 'Driver Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'totalRent', // from_entity_code
      displayName: 'Total Rent',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        INPROGRESS: 'badge badge-light-info',
        APPROVED: "badge badge-light-success",
        FORWARDED: "badge badge-light-secondary",
        REQUESTFORCLARIFICATION: 'badge badge-light-warning'
      }
    }
  ];


  public static tripListInprogressColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'tripNumber',
      displayName: 'Trip No',
      type: 'string'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.date).format("DD-MM-YYYY HH-MM")

    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'customerName',
      displayName: 'Customer Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'visitingPlace',
      displayName: 'Visiting Place',
      type: 'string',
      align: 'center'
    },
    {
      name: 'driverName', // from_entity_type_code
      displayName: 'Driver Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'totalRent', // from_entity_code
      displayName: 'Total Rent',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        INPROGRESS: 'badge badge-light-info',
        APPROVED: "badge badge-light-success",
        FORWARDED: "badge badge-light-secondary",
        REQUESTFORCLARIFICATION: 'badge badge-light-warning'
      }
    }
  ];

  public static tripListForwardColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'tripNumber',
      displayName: 'Trip No',
      type: 'string'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.date).format("DD-MM-YYYY HH-MM")

    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'customerName',
      displayName: 'Customer Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'visitingPlace',
      displayName: 'Visiting Place',
      type: 'string',
      align: 'center'
    },
    {
      name: 'driverName', // from_entity_type_code
      displayName: 'Driver Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'totalRent', // from_entity_code
      displayName: 'Total Rent',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        INPROGRESS: 'badge badge-light-info',
        APPROVED: "badge badge-light-success",
        FORWARDED: "badge badge-light-secondary",
        REQUESTFORCLARIFICATION: 'badge badge-light-warning'
      }
    }
  ];

  public static tripListPendingPaymentColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'tripNumber',
      displayName: 'Trip No',
      type: 'string'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.date).format("DD-MM-YYYY HH-MM")

    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'customerName',
      displayName: 'Customer Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'visitingPlace',
      displayName: 'Visiting Place',
      type: 'string',
      align: 'center'
    },
    {
      name: 'driverName', // from_entity_type_code
      displayName: 'Driver Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'totalRent', // from_entity_code
      displayName: 'Total Rent',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        INPROGRESS: 'badge badge-light-info',
        APPROVED: "badge badge-light-success",
        FORWARDED: "badge badge-light-secondary",
        REQUESTFORCLARIFICATION: 'badge badge-light-warning'
      }
    }
  ];

  public static driverPaymentColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'paymentDate',
      displayName: 'Payment Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.createdDate).format("DD-MM-YYYY HH-MM")
    },
    {
      name: 'driverName',
      displayName: 'Driver Name',
      type: 'string',


    },
    {
      name: 'paymentNo',
      displayName: 'Payment No',
      type: 'string',
      align: 'center'
    },
    {
      name: 'salaryType',
      displayName: 'Salary Type',
      type: 'options',
      badgeColors: {
        ADVANCE: 'badge badge-light-danger',
        WAGES: "badge badge-light-primary"
      }
    },
    {
      name: 'monthlySalary',
      displayName: 'Monthly Salary',
      type: 'string',
      align: 'center'
    },
    {
      name: 'dailyWagesOrAdvance',
      displayName: 'Wages Or Advance',
      type: 'string',
      align: 'center'
    },
    {
      name: 'remarks',
      displayName: 'Remark',
      type: 'string',
      align: 'center'
    }
  ];

  public static payOutBalanceListColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'createdDate',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.createdDate).format("DD-MM-YYYY HH-MM")
    },
    {
      name: 'name',
      displayName: 'Name',
      type: 'string'
    },
    {
      name: 'walletId',
      displayName: 'Wallet Id',
      type: 'string',
      align: 'center'
    },
    {
      name: 'amount',
      displayName: 'Amount',
      type: 'string',
      align: 'center'
    },

  ];







  public static payOutBalanceHistryListColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'walletId',
      displayName: 'Wallet Id',
      type: 'string'
    },
    {
      name: 'createdDate',
      displayName: 'Created Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.createdDate).format("DD-MM-YYYY HH-MM")
    },
    {
      name: 'applicationNumber',
      displayName: 'Application Number',
      type: 'string'
    },
    {
      name: 'amount',
      displayName: 'Amount',
      type: 'string',
    },
    {
      name: 'transactionName',
      displayName: 'Transaction Name',
      type: 'options',
      badgeColors: {
        DEBIT: 'badge badge-light-info',
        CREDIT: "badge badge-light-success"
      }
    }
  ];

  public static driverDetailListColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'name',
      displayName: 'Name',
      type: 'string',
      /* displayFcn: (item: any) => moment(item.createdDate).format("DD-MM-YYYY HH-MM") */
    },
    {
      name: 'mobileNumber',
      displayName: 'Mobile Number',
      type: 'string',
    },
    {
      name: 'drivingLicenseNumber',
      displayName: 'Driving License Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'aadharNumber',
      displayName: 'Aadhar Number'
    },
    {
      name: 'district',
      displayName: 'District',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      displayFcn: (item: any) => item.status ? "Active" : "In-Active",
      badgeColors: {
        "Active": 'badge badge-light-success',
        "In-Active": 'badge badge-light-danger'
      }
    }

  ];







  public static vehicleDetailListColumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle No',
      type: 'string'
    },
    {
      name: 'vehicleName',
      displayName: 'Vehicle Name',
      type: 'string',
    },
    {
      name: 'insuranceDate',
      displayName: 'Insurance Date',
      type: 'string',
      align: 'center',
      displayFcn: (item: any) => moment(item.insuranceDate).format("DD-MM-YYYY")
    },
    {
      name: 'taxDate',
      displayName: 'Tax Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.taxDate).format("DD-MM-YYYY")
    },
    {
      name: 'fcDate',
      displayName: 'Fc Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.fcDate).format("DD-MM-YYYY")
    },
    {
      name: 'polutionDate',
      displayName: 'Polution Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.polutionDate).format("DD-MM-YYYY")
    }
  ];
}





